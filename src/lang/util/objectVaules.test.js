import objectValues from './objectValues'

describe('objectValues', () => {
  test('returns an array of values for an object', () => {
    expect(
      objectValues({
        bim: 'bop',
        foo: 'bar'
      })
    ).toEqual(['bar', 'bop'])
  })

  test('returns an array of values for an args array with args enum bug', () => {
    const result = (function() {
      return objectValues(arguments)
    })('foo', 'bar')
    expect(result).toEqual(['foo', 'bar'])
  })

  test('returns an array of values for an object props that are part of the object enum bug', () => {
    expect(
      objectValues({
        propertyIsEnumerable: 'bop',
        toString: 'bar'
      })
    ).toEqual(['bar', 'bop'])
  })

  test('returns an empty array of values for an empty object', () => {
    expect(objectValues({})).toEqual([])
  })
})
