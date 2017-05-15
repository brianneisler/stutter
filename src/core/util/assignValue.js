import eq from '../eq'
import baseAssignValue from './baseAssignValue'
import contextHasOwnProperty from './contextHasOwnProperty'

export default function assignValue(object, key, value) {
  const objValue = object[key]
  if (!(contextHasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}
