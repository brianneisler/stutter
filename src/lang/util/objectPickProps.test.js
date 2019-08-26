import objectPickProps from './objectPickProps'

describe('objectPickProps', () => {
  test('picks the given props from an object', () => {
    expect(objectPickProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd'])).toStrictEqual({ a: 1, d: 4 })
  })

  test('ignores properties that are not on the object', () => {
    expect(objectPickProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'e', 'f'])).toStrictEqual({
      a: 1
    })
  })
})
