import objectMutateSetProperty from './objectMutateSetProperty'

describe('objectMutateSetProperty', () => {
  test('sets an existing property on an Object and returns a copy of the Object with the property set', () => {
    const object = {
      bar: 2,
      baz: 3,
      foo: 1
    }
    const result = objectMutateSetProperty(object, 'foo', 4)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(result).toBe(object)
  })

  test('setting a Property that does not exist on an Object sets the Property', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectMutateSetProperty(object, 'foo', 4)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(result).toBe(object)
  })

  test('setting a Property that does not exist on an Object to undefined sets the Property on the Object', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectMutateSetProperty(object, 'foo', undefined)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: undefined
    })
    expect(result).toBe(object)
  })
})
