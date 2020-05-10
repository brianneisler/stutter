import buildException from './buildException'
import createContext from './createContext'
import fnApply from './fnApply'

const functionMultiDispatch = function (fn) {
  const { meta } = fn
  const func = function () {
    const context = createContext({
      callee: func
    })
    // TODO BRN: In the event that this results in a no match error, we should
    // try to identify the closest match that was likely intended and do a
    // parameter validation error
    let match = fn.dispatch(context, arguments, meta)
    if (meta.multi) {
      if (match.length === 0) {
        // TODO BRN: In the event that this results in a no matches, we should
        // try to identify the closest match that was likely intended and do a
        // parameter validation error
        throw buildException(fn)
          .expected.arguments(arguments)
          .toMatchDispatcher(fn.dispatcher)
      }
      // NOTE BRN: In the event of multiple matches, we execute the first match
      match = match[0]
    }
    return fnApply(match.fn, context, this, arguments)
  }
  return func
}

export default functionMultiDispatch
