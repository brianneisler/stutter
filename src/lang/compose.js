import Any from './types/Any'
import Function from './types/Function'
import arrayFlatten from './util/arrayFlatten'
import arrayLikeReduceRight from './util/arrayLikeReduceRight'
import arrayLikeSlice from './util/arrayLikeSlice'
import defn from './defn'
import identity from './identity'

/**
 * Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @function
 * @since v0.1.0
 * @category common
 * @param {...Function} functions The functions to compose
 * @returns {Function}
 * @example
 *
 * const classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 * const yellGreeting = compose(toUpper, classyGreeting)
 * yellGreeting('James', 'Bond')
 * //=> "THE NAME'S BOND, JAMES BOND"
 *
 * compose(Math.abs, add(1), multiply(2))(-4) //=> 7
 */
const compose = defn(
  'lang.compose',
  'Performs right-to-left function composition. The rightmost function may have any arity; the remaining functions must be unary.',

  // TODO BRN: Add support for types that can check for an Array, this way we
  // can avoid performing the flatten on every call if no arrays are present in
  // the arguments.
  [Any, () => Function],
  (...functions) => {
    functions = arrayFlatten(functions)
    const { length } = functions
    if (length === 0) {
      return identity
    }

    if (length === 1) {
      return functions[0]
    }

    const lastFunc = functions[length - 1]
    const rest = arrayLikeSlice(functions, 0, length - 1)

    return (...args) =>
      arrayLikeReduceRight(rest, lastFunc(...args), (composed, func) => func(composed))
  },

  [() => Function],
  () => identity
)

export default compose
