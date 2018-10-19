import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose(
  withCurry(2),
  withExpectations((fn) => expect(fn).ofArguments([
    expect.isFunction,
    expect.isNumber
  ]))
)

const after = enhance(() => fn((func, n) => {
  return (...args) => {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}))

export default after
