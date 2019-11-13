import SYMBOL_FN from '../../constants/SYMBOL_FN'
import anyIsNumber from '../anyIsNumber'
import functionAry from '../functionAry'
import functionCurry from '../functionCurry'
import functionHandleExceptions from '../functionHandleExceptions'
import functionMemoize from '../functionMemoize'
import functionMultiDispatch from '../functionMultiDispatch'
import functionResolve from '../functionResolve'
import functionTypeCheck from '../functionTypeCheck'
import objectDefineProperty from '../objectDefineProperty'

const buildFnCaller = (fn) =>
  function() {
    return fn.apply(this, arguments)
  }

const buildFnHandler = function(fn) {
  const { meta } = fn
  let handler = function() {
    return fn.func.apply(this, arguments)
  }

  // NOTE BRN: the order of how we compose these functions matters.
  // 1) We want dispatching to be the last thing that happens. This will
  //    sometimes be overriden by such things as currying
  // 2) We want the type checking to be performed before dispatching. This way
  //    we completely check the functions types before any execution
  // 3) Currying should happen before typchecking  This way when we're currying
  //    we first curry the values then type check against the final set of
  //    values once the function is fully curried.
  // 4) Value resolution should happen before currying, this way we only curry
  //    resolved values and do not curry Promises or Generators
  // 5) Execption handling should be the very first thing that happens. This way
  //    we can wrap around all function execution and catch any execeptions that
  //    may occur during any part of the function execution.

  if (meta.dispatcher) {
    // NOTE BRN: This overrides the base handler
    handler = functionMultiDispatch(fn)
  }

  if (meta.parameters || meta.returns) {
    // HACK BRN: Need this so that the type check execptions know what name to
    // call this function
    objectDefineProperty(handler, SYMBOL_FN, {
      configurable: true,
      value: fn
    })
    handler = functionTypeCheck(handler, fn.meta)
  }

  if (meta.curry) {
    handler = functionCurry(fn, handler)
  }

  if (meta.memoize) {
    handler = functionMemoize(handler)
  }

  if (meta.resolve) {
    handler = functionResolve(handler)
  }

  if (anyIsNumber(meta.ary)) {
    handler = functionAry(handler, meta.ary)
  }

  if (meta.handleExceptions) {
    handler = functionHandleExceptions(handler)
  }

  return handler
}

const functionUpdate = function(updates) {
  return this[SYMBOL_FN].update(updates)
}

const fnCallerDefineProps = (caller, fn) => {
  const { parameters } = fn.meta
  if (parameters && parameters.length > 0) {
    objectDefineProperty(caller, 'length', {
      configurable: true,
      value: parameters.length
    })
  }
  objectDefineProperty(caller, 'dispatcher', {
    configurable: true,
    get() {
      return this[SYMBOL_FN].meta.dispatcher
    }
  })
  objectDefineProperty(caller, 'parameters', {
    configurable: true,
    get() {
      return this[SYMBOL_FN].meta.parameters
    }
  })
  objectDefineProperty(caller, 'returns', {
    configurable: true,
    get() {
      return this[SYMBOL_FN].meta.returns
    }
  })
  objectDefineProperty(caller, 'update', {
    configurable: true,
    value: functionUpdate
  })
  objectDefineProperty(caller, SYMBOL_FN, {
    configurable: true,
    value: fn
  })
  return caller
}

/**
 * Note: This class is **immutable**
 */
class Fn {
  /**
   * Build a new Fn that will optionally...
   * 1) check the Parameters and the return type if they exist.
   * 2) curry
   * 3) resolve incoming parameters
   *
   * @private
   * @function
   * @since v0.1.0
   * @category lang.util
   * @param {Function} func The function to wrap.
   * @param {?Object} meta The meta properties to set on the new Fn.
   * @return {Function} The new type checked function.
   * @example
   *
   * const fn = buildFn((arg1, arg2) => arg1 + arg2, {
   *   parameters: [
   *     new Parameter('arg1', Number),
   *     new Parameter('arg1', Number)
   *   ],
   *   returns: Number
   * })
   *
   * fn(1, 2)
   * //=> 3
   *
   * fn('foo', 123)
   * //=> throws TypeError
   *
   * const fn = buildFn(() => 'foo', {
   *   parameters: [],
   *   returns: Number
   * })
   *
   * fn()
   * //=> throws TypeError
   */
  static build(func, meta = {}) {
    const fn = new Fn(func, meta)
    const caller = buildFnCaller(fn)
    return fnCallerDefineProps(caller, fn)
  }

  constructor(func, meta) {
    this.func = func
    this.meta = meta
    this.handler = buildFnHandler(this)
  }

  get curried() {
    return this.meta.curried
  }

  get dispatcher() {
    return this.meta.dispatcher
  }

  get parameters() {
    return this.meta.parameters
  }

  get returns() {
    return this.meta.returns
  }

  apply(context, args) {
    return this.handler.apply(context, args)
  }

  call(context, ...args) {
    return this.apply(context, args)
  }

  update(updates) {
    // TODO BRN: In the event that parameters are updated we should either wipe
    // out or persist any curried meta values. Not sure how to quite do this at
    // the moment...
    return Fn.build(this.func, {
      ...this.meta,
      ...updates
    })
  }
}

export default Fn
