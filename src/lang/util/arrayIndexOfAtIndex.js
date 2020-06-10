import anyIsFunction from './anyIsFunction'
import anyIsNaN from './anyIsNaN'
import anyToStringTag from './anyToStringTag'

const arrayIndexOfAtIndex = (array, value, index, equalsFunc) => {
  let inf
  let item
  const { length } = array
  // Array.prototype.indexOf doesn't exist below IE9
  if (anyIsFunction(array.indexOf)) {
    switch (anyToStringTag(value)) {
      case 'Number':
        if (value === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / value
          while (index < length) {
            item = array[index]
            if (item === 0 && 1 / item === inf) {
              return index
            }
            index += 1
          }
          return -1
        } else if (anyIsNaN(value)) {
          while (index < array.length) {
            item = array[index]
            if (anyIsNaN(item)) {
              return index
            }
            index += 1
          }
          return -1
        }
        // non-zero numbers can utilise Set
        return array.indexOf(value, index)

      // all these types can utilise Set
      case 'String':
      case 'Boolean':
      case 'Function':
      case 'Undefined':
        return array.indexOf(value, index)

      case 'Null':
        // null can utilise Set
        return array.indexOf(value, index)
    }
  }
  // anything else not covered above, defer to R.equals
  while (index < length) {
    if (equalsFunc(array[index], value)) {
      return index
    }
    index += 1
  }
  return -1
}

export default arrayIndexOfAtIndex
