import apply from './apply'

describe('apply', () => {
  test('applies all args to function and returns value, args last', () => {
    const result = apply(
      (arg1, arg2, arg3) => {
        expect(arg1).toBe('a')
        expect(arg2).toBe('b')
        expect(arg3).toBe('c')
        return 'baz'
      },
      ['a', 'b', 'c']
    )

    expect(result).toBe('baz')
  })

  test('applies all args to function and returns value, args first', () => {
    const result = apply(['a', 'b', 'c'], (arg1, arg2, arg3) => {
      expect(arg1).toBe('a')
      expect(arg2).toBe('b')
      expect(arg3).toBe('c')
      return 'baz'
    })

    expect(result).toBe('baz')
  })

  test('maintains context of function when curried, args last', () => {
    const testObject = {}
    testObject.test = apply(function() {
      expect(this).toBe(testObject)
      return 'baz'
    })
    expect(testObject.test([])).toBe('baz')
  })

  test('maintains context of function when curried, args first', () => {
    const testObject = {}
    testObject.test = apply(['a'])
    expect(
      testObject.test(function(arg1) {
        expect(arg1).toBe('a')
        expect(this).toBe(testObject)
        return 'baz'
      })
    ).toBe('baz')
  })
})
