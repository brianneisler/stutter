import withCurry from './util/withCurry'
import withFns from './util/withFns'
import floor from './floor'
import fn from './fn'
import recompose from './recompose'
import toNumber from './toNumber'


const enhance = recompose(
  withCurry(1),
  withFns({
    floor,
    toNumber
  })
)

const modulo = enhance(({ floor, toNumber }) => fn((dividend, divisor) => {
  dividend = toNumber(dividend)
  divisor = toNumber(divisor)
  return dividend - floor(dividend / divisor) * divisor
}))

export default modulo
