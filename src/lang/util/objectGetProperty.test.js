import objectGetProperty from './objectGetProperty'

describe('objectGetProperty', () => {
  test('gets property from an object', () => {
    const object = {
      a: 1,
      b: 2
    }
    expect(objectGetProperty(object, 'a')).toEqual(1)
  })
})
