import FUNCTION_IDENTITY from '../constants/FUNCTION_IDENTITY'
import buildFn from './buildFn'

/**
 * Define a multi function using a `Dispatcher`
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Dispatcher} dispatcher The dispatcher that will dispatch to the function.
 * @param {Object} meta Meta values to apply to the new Fn.
 * @param {Object} optionsm Dispatcher options to apply to the dispatcher
 * @return {Fn} The new multi Fn.
 * @example
 *
 */
const buildMultiFn = (dispatcher, meta = {}) => {
  return buildFn(FUNCTION_IDENTITY, {
    ...meta,
    dispatcher
  })
}

export default buildMultiFn
