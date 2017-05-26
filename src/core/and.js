import withCurry from './util/withCurry'
import withFns from './util/withFns'
import falsey from './falsey'
import findOrLast from './findOrLast'
import fn from './fn'
import recompose from './recompose'


const enhance = compose(
  withFns({
    falsey,
    findOrLast // TODO BRN: limit this down to find of array type to improve performance
  })
)

const and = enhance(({ falsey, findOrLast }) => fn((...args) => {
  if (args.length === 0) {
    return true
  }
  return findOrLast(args, falsey)
})

export default add
