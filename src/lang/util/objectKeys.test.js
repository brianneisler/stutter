import objectKeys from './objectKeys'

describe('objectKeys', () => {
  test('returns an array of keys for an object', () => {
    expect(
      objectKeys({
        foo: 'bar',
        bim: 'bop'
      })
    ).toEqual(['foo', 'bim'])
  })

  test('returns an array of keys for an args array with args enum bug', () => {
    const result = (function() {
      return objectKeys(arguments)
    })('foo', 'bar')
    expect(result).toEqual(['0', '1'])
  })

  test('returns an array of keys for an object props that are part of the object enum bug', () => {
    expect(
      objectKeys({
        toString: 'bar',
        propertyIsEnumerable: 'bop'
      })
    ).toEqual(['toString', 'propertyIsEnumerable'])
  })

  test('returns an empty array of keys for an empty object', () => {
    expect(objectKeys({})).toEqual([])
  })
})
