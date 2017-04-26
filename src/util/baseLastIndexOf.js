import eq from '../eq'
import baseFindIndex from './baseFindIndex'

export default function baseLastIndexOf(data, value, fromIndex) {
  return baseFindIndex(data, eq(value), fromIndex, true)
}
