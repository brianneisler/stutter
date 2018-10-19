import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import isFunction from './isFunction'
import isNumber from './isNumber'
import recompose from './recompose'


const enhance = recompose(
  withCurry(1),
  withFns({
    expect,
    isFunction
  })
)

const lazy = enhance(({ expect, isFunction }) => fn((func) => {
  expect(
    isFunction(func),
    `${func} is not a function`
  )
  return (...args) => {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
  lodash.prototype.toJS = wrapperValueOf;

    lodash.prototype.toJSON = wrapperValueOf;
    lodash.prototype.toArray = wrapperToString;
    lodash.prototype.toObject = wrapperToString;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.valueOf = wrapperValueOf;
}))

export default lazy
