import eq from '../eq'
import baseFindIndex from './baseFindIndex'

export default function baseIndexOf(data, value, fromIndex) {
  return baseFindIndex(data, eq(value), fromIndex)
}
