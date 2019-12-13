import objectDeleteProperty from './objectDeleteProperty'

describe('objectDeleteProperty', () => {
  test('deletes a property on an Object and returns a copy of the Object with the property deleted', () => {
    const object = {
      bar: 2,
      baz: 3,
      foo: 1
    }
    const result = objectDeleteProperty(object, 'foo')
    expect(result).toEqual({
      bar: 2,
      baz: 3
    })
    expect(result.hasOwnProperty('foo')).toBe(false)
    expect(object).toEqual({
      bar: 2,
      baz: 3,
      foo: 1
    })
  })

  test('deleting a Property that does not exist on an Object returns the original Object', () => {
    const object = {
      bar: 2,
      baz: 3,
      foo: 1
    }
    const result = objectDeleteProperty(object, 'dne')
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 1
    })
    expect(result).toBe(object)
  })
})
