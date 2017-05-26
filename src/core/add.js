import withCurry from './util/withCurry'
import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'
import reduce from './reduce'
import toNumber from './toNumber'


const enhance = recompose(
  withCurry(2),
  withFns({
    reduce, // TODO BRN: limit this down to reduce of array type to improve performance
    toNumber
  })
)

// TODO BRN: Add built in fractioning to allow for accurate addition of decimal
const add = enhance(({ reduce, toNumber }) => fn((...args) => {
  if (args.length === 0) {
    return 0
  }
  return reduce(args, (acc, val) => acc + toNumber(val), 0))
})

export default add
