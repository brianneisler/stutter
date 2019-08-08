import buildFn from './buildFn'
import fnApply from './fnApply'

describe('fnApply', () => {
  test('applies the given Fn', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = buildFn(func)
    expect(fnApply(fn, ['a', 'b', 'c'])).toBe(0)
  })
})
