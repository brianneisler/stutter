import baseFindIndex from './baseFindIndex'
import withComparatorValue from './withComparatorValue'

export default function baseIndexOfWith(data, value, comparator, fromIndex) {
  return baseFindIndex(data, withComparatorValue(comparator, value), fromIndex)
}
