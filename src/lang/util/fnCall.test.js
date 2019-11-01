import buildFn from './buildFn'
import fnCall from './fnCall'

describe('fnCall', () => {
  test('calls the given Fn', () => {
    const func = (argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe('b')
      expect(argC).toBe('c')
      return 0
    }
    const fn = buildFn(func)
    expect(fnCall(fn, 'a', 'b', 'c')).toBe(0)
  })
})
