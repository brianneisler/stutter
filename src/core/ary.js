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

const ary = enhance(({ expect, isFunction, isNumber }) => fn((func, n) => {
  expect(
    isFunction(func),
    `${func} is not a function`
  )
  expect(
    isNumber(n),
    `${n} is not a number`
  )
  return function(...args) {
    return func(n >= args.length ? args : args.slice(0, n))
  }
})))

export default ary
