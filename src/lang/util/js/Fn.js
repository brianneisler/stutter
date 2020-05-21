import { META, TO_SIGNATURE, TO_STRING_TAG } from '../../constants/Symbol'
import { v4 as uuid } from 'uuid'
import Context from './Context'
import anyIsContext from '../anyIsContext'
import anyIsNumber from '../anyIsNumber'
import anyToName from '../anyToName'
import anyToSignatureString from '../anyToSignatureString'
import buildException from '../buildException'
import createJSCallee from '../createJSCallee'
import fnToSignatureString from '../fnToSignatureString'
import functionAry from '../functionAry'
import functionComplement from '../functionComplement'
import functionCurry from '../functionCurry'
import functionDefineSymbolFn from '../functionDefineSymbolFn'
import functionHandleExceptions from '../functionHandleExceptions'
import functionMemoize from '../functionMemoize'
import functionMultiDispatch from '../functionMultiDispatch'
import functionResolve from '../functionResolve'
import functionTypeCheck from '../functionTypeCheck'
import objectDefineProperty from '../objectDefineProperty'
import objectKeys from '../objectKeys'
import objectPickProps from '../objectPickProps'
import objectShallowEquals from '../objectShallowEquals'

const buildFnHandler = function (fn) {
  const { meta } = fn
  let handler = functionDefineSymbolFn(function () {
    if (!anyIsContext(this)) {
      throw buildException(handler).expected.this(this).toBeInstanceOf(Context)
    }
    return fn.func.apply(this.jsContext, arguments)
  }, fn)

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
    handler = functionDefineSymbolFn(functionMultiDispatch(fn), fn)
  }

  if (meta.complement) {
    handler = functionComplement(handler, meta.complement)
  }

  if (meta.parameters || meta.returns) {
    handler = functionDefineSymbolFn(functionTypeCheck(handler, fn.meta), fn)
  }

  if (meta.curry) {
    handler = functionCurry(handler)
  }

  if (meta.resolve) {
    handler = functionDefineSymbolFn(functionResolve(handler), fn)
  }

  // NOTE BRN: Memoization should come before parameter resolution to prevent
  // resolving all arguments on every memoized call
  if (meta.memoize) {
    handler = functionDefineSymbolFn(functionMemoize(handler), fn)
  }

  if (anyIsNumber(meta.ary)) {
    handler = functionDefineSymbolFn(functionAry(handler, meta.ary), fn)
  }

  if (meta.handleExceptions) {
    handler = functionDefineSymbolFn(functionHandleExceptions(handler, fn), fn)
  }

  return handler
}

/**
 * Note: This class is **immutable**
 */
class Fn {
  constructor(func, meta) {
    // TODO BRN: A faster method of generation for the id would be to use an
    // global increment counter. This would be problematic in a situation with
    // more than one process though.
    this.id = uuid()

    // TODO BRN: Not sure this is the right place for this assignment
    objectDefineProperty(func, 'name', {
      configurable: true,
      value: `Fn:${this.id}`
    })
    this.func = func
    this.meta = meta
    // TODO BRN: Figure out how to cache the generation of parts of this handler
    // TODO BRN: Would be best to lazy generate this handler since it is likely
    // that this Fn will never be executed in multiple successive `update` calls
    this.handler = buildFnHandler(this)
  }

  get [META]() {
    return this.meta
  }

  get [TO_STRING_TAG]() {
    return 'Fn'
  }

  get [TO_SIGNATURE]() {
    return fnToSignatureString(this)
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
    try {
      return this.handler.apply(context, args)
    } catch (error) {
      // let { callee } = context
      // const jsCallee = createJSCallee()
      // if (!callee) {
      //   callee = jsCallee
      // }
      // console.log(
      //   `Error occurred while ${anyToSignatureString(
      //     callee
      //   )} was invoking ${anyToSignatureString(this)} at (${jsCallee.file}:${
      //     jsCallee.lineNumber
      //   }:${jsCallee.columnNumber})`
      // )
      throw error
    }
  }

  call(context, ...args) {
    return this.apply(context, args)
  }

  dispatch(context, args, options) {
    try {
      return this.dispatcher.dispatch(
        context
          .pushCallstack({
            method: 'dispatch',
            target: this
          })
          .setCallee(this),
        args,
        options
      )
    } catch (error) {
      // let { callee } = context
      // const jsCallee = createJSCallee()
      // if (!callee) {
      //   callee = jsCallee
      // }
      // console.log(
      //   `Error occurred while ${anyToSignatureString(
      //     callee
      //   )} was dispatching to ${anyToSignatureString(this)} at (${
      //     jsCallee.file
      //   }:${jsCallee.lineNumber}:${jsCallee.columnNumber})`
      // )
      throw error
    }
  }

  log(logger) {
    logger.log(
      `${this[TO_STRING_TAG]}:${
        anyToName(this) ? anyToName(this) : 'anonymous'
      } {`
    )
    logger.indent()
    logger.write('meta:', false)
    logger.log(this.meta)
    logger.deindent()
    logger.log('}')
  }

  update(updates, options = {}) {
    // TODO BRN: In the event that parameters are updated we should either wipe
    // out or persist any curried meta values. Not sure how to quite do this at
    // the moment...
    if (
      objectShallowEquals(
        objectPickProps(this.meta, objectKeys(updates)),
        updates
      )
    ) {
      return this
    }

    if (this.dispatcher && !updates.dispatcher && options.dispatch) {
      return new Fn(this.func, {
        ...this.meta,
        ...updates,
        dispatcher: this.dispatcher.update(updates)
      })
    }
    return new Fn(this.func, {
      ...this.meta,
      ...updates
    })
  }
}

export default Fn
