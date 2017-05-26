import withCurry from './util/withCurry'
import withFns from './util/withFns'
import withPropsFromContext from './util/withPropsFromContext'
import fn from './fn'
import recompose from './recompose'
import toNumber from './toNumber'


const enhance = recompose(
  withCurry(1),
  withPropsFromContext((context) => ({
    Math: context.Math
  })),
  withFns({
    toNumber
  })
)

const floor = enhance(({ Math, toNumber }) => {
  return fn((x) => Math.floor(toNumber(x)))
})

export default floor
