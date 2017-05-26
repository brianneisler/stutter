import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'
import reduce from './reduce'
import toString from './toString'


const enhance = recompose(
  withFns({
    reduce, // TODO BRN: limit this down to reduce of array type to improve performance
    toString
  })
)

const str = enhance(({ reduce, toString }) => fn((...args) => {
  if (args.length === 0) {
    return ''
  }
  return reduce(args, (acc, val) => acc + toString(val), ''))
})

export default str
