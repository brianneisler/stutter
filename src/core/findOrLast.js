import withCurry from './util/withCurry'
import withFns from './util/withFns'
import each from './each'
import fn from './fn'
import iteratee from './iteratee'
import recompose from './recompose'
import slice from './slice'

const enhance = recompose(
  withCurry(2),
  withFns({
    each,
    iteratee,
    slice
  })
)

const findOrLast = enhance(({ each, iteratee, slice }) => fn((data, predicate, fromIndex = 0) => {
  predicate = iteratee(predicate)
  let found = undefined
  each(slice(data, fromIndex), (value) => {
    const result = predicate(value)
    if (result) {
      found = value
      return false
    }
    found = value
  })
  return found
})

export default findOrLast
