import remove from './remove'

describe('remove', () => {
  describe('Array', () => {
    test('removes values in array', () => {
      const array = ['a', 'b', 'c']
      const result = remove((val, index) => val === 'b' && index === 1, array)
      expect(result).toEqual(['a', 'c'])
    })

    test('returns same Array when no values are removeed in an Array', () => {
      const array = ['a', 'b', 'c']
      const result = remove((val) => val === 'd', array)
      expect(result).toEqual(['a', 'b', 'c'])
      expect(result).toBe(array)
    })
  })

  describe('String', () => {
    test('removes values in string', () => {
      const string = 'abcbd'
      const result = remove((val) => val !== 'b', string)
      expect(result).toBe('bb')
    })

    test('returns original String when no values are removed in a String', () => {
      const string = 'abc'
      const result = remove((val) => val === 'd', string)
      expect(result).toBe('abc')
    })
  })

  describe('Object', () => {
    test('removes values in object', () => {
      const object = { a: 'a', b: 'b', c: 'c' }
      const result = remove((val, key) => val === 'b' && key === 'b', object)
      expect(result).toEqual({
        a: 'a',
        c: 'c'
      })
    })

    test('returns same Object when no values are removed in an Object', () => {
      const object = { a: 'a', b: 'b', c: 'c' }
      const result = remove((val) => val === 'd', object)
      expect(result).toEqual({ a: 'a', b: 'b', c: 'c' })
    })
  })

  test('upgrades to a Promise when an async predicate is used', async () => {
    const array = ['a', 'b', 'c']
    let result = remove(
      (val, index) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(val === 'b' && index === 1)
          }, 0)
        }),
      array
    )

    expect(result).toBeInstanceOf(Promise)

    result = await result
    expect(result).toEqual(['a', 'c'])
  })
})
