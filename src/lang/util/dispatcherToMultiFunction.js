import objectDefineProperty from './objectDefineProperty'

/**
 * Define a multi function using a `Dispatcher`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Dispatcher} dispatcher The dispatcher that will dispatch the function
 * call to the function.
 * @return {Function} The new multi Function.
 * @example
 *
 */
const dispatcherToMultiFunction = (dispatcher, options = { multi: false, partial: false }) => {
  const multiFunc = function() {
    // TODO BRN: In the event that this results in a no match error, we should
    // try to identify the closest match that was likely intended and do a
    // parameter validation error
    let match = dispatcher.dispatch(arguments, options)
    if (options.multi) {
      if (match.length === 0) {
        // TODO BRN: In the event that this results in a no matches, we should
        // try to identify the closest match that was likely intended and do a
        // parameter validation error
        throw new Error(`Could not find a matching function to execute`)
      }
      // NOTE BRN: In the event of multiple matches, we execute the first match
      match = match[0]
    }
    return match.func.apply(this, arguments)
  }
  objectDefineProperty(multiFunc, 'dispatcher', {
    value: dispatcher,
    configurable: true
  })
  return multiFunc
}

export default dispatcherToMultiFunction
