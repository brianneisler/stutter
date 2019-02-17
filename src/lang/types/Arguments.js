import anyIsArguments from '../util/anyIsArguments'
import anyToArguments from '../util/anyToArguments'
import deftype from '../deftype'

/**
 * A `Type` representing a javascript `Arguments` object.
 *
 * @type Type
 * @since v0.1.0
 * @category lang
 * @example
 *
 */
const Arguments = deftype('lang.Arguments', 'Arguments object in a function', {
  is: anyIsArguments,
  to: anyToArguments
})

export default Arguments
