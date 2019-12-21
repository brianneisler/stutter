import { SYMBOL_ITERATOR } from '../constants'
import anyIsArguments from './anyIsArguments'
import anyIsArray from './anyIsArray'
import anyIsArrayLike from './anyIsArrayLike'
import anyIsFunction from './anyIsFunction'
import anyIsIterable from './anyIsIterable'
import anyIsNil from './anyIsNil'
import anyIsObject from './anyIsObject'
import anyIsString from './anyIsString'
import anyToStringTag from './anyToStringTag'
import argumentsToArray from './argumentsToArray'
import arrayClone from './arrayClone'
import iteratorToArray from './iteratorToArray'
import mapToArray from './mapToArray'
import objectValues from './objectValues'
import setToArray from './setToArray'
import stringToArray from './stringToArray'

/**
 * Converts `any` to an `Array`.
 *
 * @private
 * @function
 * @since 0.0.21
 * @category lang.util
 * @param {*} any The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * anyToArray({ 'a': 1, 'b': 2 })
 * // => [1, 2]
 *
 * anyToArray('abc')
 * // => ['a', 'b', 'c']
 *
 * anyToArray(1)
 * // => []
 *
 * anyToArray(null)
 * // => []
 */
const anyToArray = (any) => {
  if (anyIsArray(any)) {
    return any
  }
  if (anyIsNil(any)) {
    return []
  }
  if (anyIsFunction(any.toArray)) {
    return any.toArray()
  }
  if (anyIsArrayLike(any)) {
    if (anyIsString(any)) {
      return stringToArray(any)
    } else if (anyIsArguments(any)) {
      return argumentsToArray(any)
    }
    return arrayClone(any)
  }
  if (!anyIsObject(any)) {
    return [any]
  }
  if (anyIsIterable(any)) {
    return iteratorToArray(any[SYMBOL_ITERATOR]())
  }
  const tag = anyToStringTag(any)
  const func = tag == 'Map' ? mapToArray : tag == 'Set' ? setToArray : objectValues

  return func(any)
}

export default anyToArray
