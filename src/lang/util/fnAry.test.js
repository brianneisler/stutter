import definitionToFn from './definitionToFn'
import fnAry from './fnAry'

describe('fnAry', () => {
  test('sets arity of 0', () => {
    const baseFn = definitionToFn((argA, argB, argC) => {
      expect(argA).toBe(undefined)
      expect(argB).toBe(undefined)
      expect(argC).toBe(undefined)
      return 0
    })
    const aryFn = fnAry(baseFn, 0)
    expect(baseFn.length).toBe(3)
    expect(aryFn.length).toBe(0)
    expect(aryFn('a', 'b', 'c')).toBe(0)
  })

  test('sets arity of 1', () => {
    const baseFn = definitionToFn((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe(undefined)
      expect(argC).toBe(undefined)
      return 0
    })
    const aryFn = fnAry(baseFn, 1)
    expect(baseFn.length).toBe(3)
    expect(aryFn.length).toBe(1)
    expect(aryFn('a', 'b', 'c')).toBe(0)
  })
})
