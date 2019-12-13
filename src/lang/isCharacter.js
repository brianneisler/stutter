import Any from './types/Any'
import Boolean from './types/Boolean'
import Character from './types/Character'
import defn from './defn'
import is from './is'

/**
 * @since v0.1.0
 * @param {*} any The value to check.
 * @returns {boolean} Returns `true` if `any` is a Character.
 * @example
 *
 * isCharacter('a')
 * // => true
 *
 * isCharacter('abc')
 * // => false
 */
const isCharacter = defn(
  'lang.isCharacter',
  'Checks if `Any` is classified as a `Character` type',

  [Any, () => Boolean],
  is(Character)
)

export default isCharacter
