import withCurry from './util/withCurry'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose(
  withCurry(2)
)

const arg2 = enhance(() => fn((arg1, arg2) => {
  return arg2
}))

export default arg2
