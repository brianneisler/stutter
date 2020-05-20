import { FN } from '../constants/Symbol'
import anyIsPlaceholder from './anyIsPlaceholder'
import anyMatchesParameter from './anyMatchesParameter'
import arrayClone from './arrayClone'
import arrayConcat from './arrayConcat'
import arraySlice from './arraySlice'
import buildException from './buildException'
import buildFnCaller from './buildFnCaller'
import fnApply from './fnApply'
import fnGetMeta from './fnGetMeta'
import fnsToMultiFnDispatcher from './fnsToMultiFnDispatcher'
import functionArity from './functionArity'
import functionDefineSymbolFn from './functionDefineSymbolFn'

const curryFunction = (length, received, func) => {
  return function () {
    const combined = []
    let argsIdx = 0
    let left = length
    let combinedIdx = 0
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      let result
      if (
        combinedIdx < received.length &&
        (!anyIsPlaceholder(received[combinedIdx]) ||
          argsIdx >= arguments.length)
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
  const meta = fnGetMeta(fn)
  const curried = meta.curried || {}
  const parameters = curried.parameters || meta.parameters
  const placeholders = curried.placeholders || []
  const received = curried.received || []

  return function () {
    const { length } = arguments
    if (length === 0) {
      throw buildException(fn).expected.arguments(arguments).not.toBeEmpty()
    }

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
          newReceived.push(arg)
          newPlaceholders.push(newReceived.length - 1)
        }
        newParameters.push(parameter)
      } else {
        if (parameter && !anyMatchesParameter(arg, parameter, meta)) {
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
      newPlaceholders = arrayConcat(
        newPlaceholders,
        arraySlice(placeholders, length)
      )
    }
    if (length < parameters.length) {
      newParameters = arrayConcat(newParameters, arraySlice(parameters, length))
      // TODO BRN: These updates will be sent down to the child Fns through the
      // dispatch update. Not sure if that makes sense...
      return buildFnCaller(
        fn.update({
          curried: {
            parameters: newParameters,
            placeholders: newPlaceholders,
            received: newReceived
          },
          curry: true
        })
      )
    } else if (newPlaceholders.length > 0) {
      // TODO BRN: These updates will be sent down to the child Fns through the
      // dispatch update. Not sure if that makes sense...
      return buildFnCaller(
        fn.update({
          curried: {
            parameters: newParameters,
            placeholders: newPlaceholders,
            received: newReceived
          },
          curry: true
        })
      )
    }
    return handler.apply(this, newReceived)
  }
}

const findExactOrClosestCompletedMatch = (matches) => {
  let closestMatch
  const { size } = matches
  let idx = -1
  while (++idx < size) {
    const match = matches.get(idx)
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
  // TODO BRN: Figure out how to pass down the context
  const func = function () {
    const matches = fn.dispatch(
      this,
      arguments,
      { multi: true, partial: true }
      // TODO BRN: Figure out how to connect this to the invoking function
      // ("callee") context
    )
    if (matches.size === 0) {
      console.log('arguments:', arguments)
      console.log('fn.meta:', fn.meta)
      throw buildException(fn)
        .expected.arguments(arguments)
        .toMatchDispatcher(fn.dispatcher)
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

    // TODO BRN: Might be able to replace this part with an update call to the dispatcher
    const curriedFns = matches.map((match) => {
      let matchFn = match.fn
      if (!fnGetMeta(matchFn).curry) {
        // TODO BRN: Pass the context along here so that we can reconstruct the
        // location that the curried function was created
        matchFn = matchFn.update({ curry: true })
      }
      return fnApply(matchFn, this, arguments)
    })

    return buildFnCaller(
      fn.update({
        curry: true,
        dispatcher: fnsToMultiFnDispatcher(curriedFns)
      })
    )
  }
  return func
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
  if (!func[FN]) {
    return curryFunction(func)
  }
  const { dispatcher, parameters } = fnGetMeta(func)
  if (dispatcher) {
    return functionDefineSymbolFn(curryMultiFn(func[FN]), func[FN])
  }
  if (parameters) {
    if (parameters.length === 0) {
      // Function accepts no parameters, do not apply currying
      return func
    }
    return functionDefineSymbolFn(
      curryParameterizedFn(func[FN], func),
      func[FN]
    )
  }
  throw new Error(
    'Fn must either have a dispatcher function or have parameters'
  )
}

export default functionCurry
