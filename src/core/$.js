import Form from './types/Form'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import isFunction from './isFunction'
import recompose from './recompose'


const enhance = recompose(
  withFns({
    expect,
    isFunction,
    isNumber
  })
)

const $ = enhance(() => fn((operator, ...operands) => {
  return Form({
    operator,
    operands
  })
}))

export default $
