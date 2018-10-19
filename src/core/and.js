import withCurry from './recomposers/withCurry'
import withFns from './recomposers/withFns'
import falsey from './falsey'
import findOrLast from './findOrLast'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose(
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
}))

export default and
