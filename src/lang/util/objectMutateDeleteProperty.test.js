import objectMutateDeleteProperty from './objectMutateDeleteProperty'

describe('objectMutateDeleteProperty', () => {
  test('deletes a property on an Object and returns the same instance', () => {
    const object = {
      bar: 1,
      baz: 2,
      foo: 3
    }
    const result = objectMutateDeleteProperty(object, 'foo')
    expect(result).toEqual({
      bar: 1,
      baz: 2
    })
    expect(result.hasOwnProperty('foo')).toBe(false)
    expect(result).toBe(object)
  })
})
