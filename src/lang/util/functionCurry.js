import SYMBOL_FN from '../constants/SYMBOL_FN'
import anyIsPlaceholder from './anyIsPlaceholder'
import arrayClone from './arrayClone'
import arrayConcat from './arrayConcat'
import arrayMap from './arrayMap'
import arraySlice from './arraySlice'
import buildException from './buildException'
import fnApply from './fnApply'
import fnGetMeta from './fnGetMeta'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'
import functionArity from './functionArity'
import functionDefineSymbolFn from './functionDefineSymbolFn'

const curryFunction = (length, received, func) => {
  return function() {
    const combined = []
    let argsIdx = 0
    let left = length
    let combinedIdx = 0
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      let result
      if (
        combinedIdx < received.length &&
        (!anyIsPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)
      ) {
        result = received[combinedIdx]
      } else {
        result = arguments[argsIdx]
        argsIdx += 1
      }
      combined[combinedIdx] = result
      if (!anyIsPlaceholder(result)) {
        left -= 1
      }
      combinedIdx += 1
    }
    return left <= 0
      ? func.apply(this, combined)
      : functionArity(left, curryFunction(length, combined, func))
  }
}

const curryParameterizedFn = (fn, handler) => {
  return function() {
    const { length } = arguments
    if (length === 0) {
      throw buildException(fn)
        .expected.arguments(arguments)
        .not.toBeEmpty()
    }
    const meta = fnGetMeta(fn)
    const curried = meta.curried || {}
    const parameters = curried.parameters || meta.parameters
    const placeholders = curried.placeholders || []
    const received = curried.received || []

    let idx = -1
    let newPlaceholders = []
    let newParameters = []
    const newReceived = arrayClone(received)
    while (++idx < length) {
      const arg = arguments[idx]
      const parameter = parameters[idx]
      const placeholder = placeholders[idx]

      if (anyIsPlaceholder(arg)) {
        if (placeholder != null) {
          // A placeholder was passed for a placeholder. Preserve the index in
          // this case.
          newPlaceholders.push(placeholder)
        } else {
          newPlaceholders.push(idx)
          newReceived.push(arg)
        }
        newParameters.push(parameter)
      } else {
        if (parameter && !parameter.type.is(arg, meta)) {
          throw buildException(fn)
            .expected.arg(arguments, idx)
            .toMatchParameter(parameter)
        }
        if (placeholder != null) {
          newReceived[placeholder] = arg
        } else {
          newReceived.push(arg)
        }
      }
    }

    if (length < placeholders.length) {
      newPlaceholders = arrayConcat(newPlaceholders, arraySlice(placeholders, length))
    }
    if (length < parameters.length) {
      newParameters = arrayConcat(newParameters, arraySlice(parameters, length))
      return fn.update({
        curried: {
          parameters: newParameters,
          placeholders: newPlaceholders,
          received: newReceived
        },
        curry: true
      })
    } else if (newPlaceholders.length > 0) {
      return fn.update({
        curried: {
          parameters: newParameters,
          placeholders: newPlaceholders,
          received: newReceived
        },
        curry: true
      })
    }
    return handler.apply(this, newReceived)
  }
}

const findExactOrClosestCompletedMatch = (matches) => {
  let closestMatch
  const { length } = matches
  let idx = -1
  while (++idx < length) {
    const match = matches[idx]
    if (!match.partial) {
      if (match.exact) {
        return match
      }
      if (!closestMatch || match.delta < closestMatch.delta) {
        closestMatch = match
      }
    }
  }
  return closestMatch
}

const curryMultiFn = (fn) => {
  return function() {
    const { dispatcher } = fnGetMeta(fn)
    const matches = dispatcher.dispatch(arguments, { multi: true, partial: true })
    if (matches.length === 0) {
      throw buildException(fn)
        .expected.arguments(arguments)
        .toMatchDispatcher(dispatcher)
    }
    const completedMatch = findExactOrClosestCompletedMatch(matches)

    if (completedMatch) {
      // TODO BRN: This breaks the current invocation chain causing any
      // remaining methods in the caller composition to be skipped. At the
      // moment that is only type checking (which does not happen on multi
      // methods) so there is nothing being skipped. But, if the composition
      // chain changes, we'll need to find a better method for this...
      return fnApply(completedMatch.fn, this, arguments)
    }

    const curriedFns = arrayMap(matches, (match) => {
      let matchFn = match.fn
      if (!fnGetMeta(matchFn).curry) {
        matchFn = matchFn.update({ curry: true })
      }
      return fnApply(matchFn, this, arguments)
    })

    return fn.update({
      curry: true,
      dispatcher: fnsToMultiFnDispatcher(curriedFns)
    })
  }
}

/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one at
 * a time. If `f` is a ternary function and `g` is `curry(f)`, the following
 * are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`__`](#__), the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Fn} fn The Fn to curry.
 * @return {Fn} A new, curried Fn.
 * @example
 *
 * const addFourNumbers = (a, b, c, d) => a + b + c + d
 *
 * const curriedAddFourNumbers = fnCurry(addFourNumbers)
 * const f = curriedAddFourNumbers(1, 2)
 * const g = f(3)
 * g(4)
 * //=> 10
 */
const functionCurry = (func) => {
  if (!func[SYMBOL_FN]) {
    return curryFunction(func)
  }
  const { dispatcher, parameters } = fnGetMeta(func)
  if (dispatcher) {
    return functionDefineSymbolFn(curryMultiFn(func[SYMBOL_FN]), func[SYMBOL_FN])
  }
  if (parameters) {
    if (parameters.length === 0) {
      // Function accepts no parameters, do not apply currying
      return func
    }
    return functionDefineSymbolFn(curryParameterizedFn(func[SYMBOL_FN], func), func[SYMBOL_FN])
  }
  throw new Error('Fn must either have a dispatcher function or have parameters')
}

export default functionCurry
