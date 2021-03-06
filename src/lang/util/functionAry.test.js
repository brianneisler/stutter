import functionAry from './functionAry'

describe('functionAry', () => {
  test('sets ary of 0', () => {
    const func = functionAry((argA, argB, argC) => {
      expect(argA).toBe(undefined)
      expect(argB).toBe(undefined)
      expect(argC).toBe(undefined)
      return 0
    }, 0)
    expect(func.length).toBe(0)
    expect(func('a', 'b', 'c')).toBe(0)
  })

  test('sets ary of 1', () => {
    const func = functionAry((argA, argB, argC) => {
      expect(argA).toBe('a')
      expect(argB).toBe(undefined)
      expect(argC).toBe(undefined)
      return 1
    }, 1)
    expect(func.length).toBe(1)
    expect(func('a', 'b', 'c')).toBe(1)
  })
})
