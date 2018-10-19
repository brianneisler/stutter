import withFns from './util/withFns'
import fn from './fn'
import fns from './fns'
import recompose from './recompose'
import toNumber from './toNumber'
import _with from './with'


const enhance = recompose(
  _with(fns({
    toNumber
  }))
)

//TODO BRN: Add support for lists and arrays
const divide = enhance(({ toNumber }) => fn((dividend, divisor) => {
  return toNumber(dividend) / toNumber(divisor)
}))

export default divide
