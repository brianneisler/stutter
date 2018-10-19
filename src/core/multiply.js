import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'
import reduce from './reduce'
import toNumber from './toNumber'


const enhance = recompose(
  withFns({
    reduce, // TODO BRN: limit this down to reduce of array type to improve performance
    toNumber
  })
)

/**
 * Multiplies
 * @static
 * @param {Array<number>} ...args
 * @returns {number}
 *
 * @TODO BRN: Add support for lists and arrays
 */
const multiply = enhance(({ reduce, toNumber }) => fn((...args) => {
  if (args.length === 0) {
    return 0
  }
  return reduce(args, (acc, val) => acc * toNumber(val), 0)
}))

export default multiply
