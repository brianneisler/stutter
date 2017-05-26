import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import isFunction from './isFunction'
import isNumber from './isNumber'
import recompose from './recompose'


const enhance = recompose(
  withCurry(2),
  withFns({
    expect,
    isFunction,
    isNumber
  })
)

const after = enhance(({ expect, isFunction, isNumber }) => fn((func, n) => {
  expect(
    isFunction(func),
    `${func} is not a function`
  )
  expect(
    isNumber(n),
    `${n} is not a number`
  )
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
})))

export default after
