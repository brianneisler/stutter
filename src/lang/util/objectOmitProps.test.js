import objectOmitProps from './objectOmitProps'

describe('objectOmitProps', () => {
  test('omits the given props from an object', () => {
    expect(objectOmitProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'd'])).toStrictEqual({ b: 2, c: 3 })
  })

  test('ignores properties that are not on the object', () => {
    expect(objectOmitProps({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'e', 'f'])).toStrictEqual({
      b: 2,
      c: 3,
      d: 4
    })
  })
})
