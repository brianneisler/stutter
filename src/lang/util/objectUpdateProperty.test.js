import objectUpdateProperty from './objectUpdateProperty'

describe('objectUpdateProperty', () => {
  test('updates an existing property on an Object and returns a copy of the Object with the property updated', () => {
    const object = {
      bar: 2,
      baz: 3,
      foo: 1
    }
    const result = objectUpdateProperty(object, 'foo', (value) => value + 3)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(object).toEqual({
      bar: 2,
      baz: 3,
      foo: 1
    })
  })

  test('updating a Property that does not exist on an Object sets the Property', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectUpdateProperty(object, 'foo', () => 4)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: 4
    })
    expect(object).toEqual({
      bar: 2,
      baz: 3
    })
  })

  test('updating a Property that does not exist on an Object to undefined updates the Property on the Object', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectUpdateProperty(object, 'foo', () => undefined)
    expect(result).toEqual({
      bar: 2,
      baz: 3,
      foo: undefined
    })
    expect(object).toEqual({
      bar: 2,
      baz: 3
    })
    expect(result).not.toBe(object)
  })

  test('updating a Property to the same value results in the same Object', () => {
    const object = {
      bar: 2,
      baz: 3
    }
    const result = objectUpdateProperty(object, 'bar', () => 2)
    expect(result).toBe(object)
    expect(result).toEqual({
      bar: 2,
      baz: 3
    })
  })
})
