import withCurry from './util/withCurry'
import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'
import toNumber from './toNumber'


const enhance = recompose(
  withCurry(2),
  withFns({
    toNumber
  })
)

const remainder = enhance(({ toNumber }) => fn((dividend, divisor) => {
  return toNumber(dividend) % toNumber(divisor)
}))

export default remainder
