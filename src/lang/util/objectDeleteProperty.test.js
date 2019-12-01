import objectDeleteProperty from './objectDeleteProperty'

describe('objectDeleteProperty', () => {
  test('deletes a property on an object', () => {
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
    expect(result).toBe(object)
  })
})
