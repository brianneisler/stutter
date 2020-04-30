import objectMutateUpdateProperty from './objectMutateUpdateProperty'

describe('objectMutateUpdateProperty', () => {
  test('updates an existing property on an Object and returns the Object with the property updated', () => {
    const object = {
      bar: 2,
      baz: 3,
      foo: 1
    }
    const result = objectMutateUpdateProperty(object, 'foo', (value) => value + 3)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(result).toBe(object)
  })

  test('updating a Property that does not exist on an Object sets the Property', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectMutateUpdateProperty(object, 'foo', () => 4)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(result).toBe(object)
  })

  test('updating a Property that does not exist on an Object to undefined updates the Property on the Object', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectMutateUpdateProperty(object, 'foo', () => undefined)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: undefined
    })
    expect(result).toBe(object)
  })
})
