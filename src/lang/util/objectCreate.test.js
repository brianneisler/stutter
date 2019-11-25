import objectCreate from './objectCreate'

describe('objectCreate', () => {
  test('creates an object using the given object as its prototype', () => {
    const proto = {
      bar: 'baz',
      foo() {}
    }
    const object = objectCreate(proto)
    expect(Object.getPrototypeOf(object)).toBe(proto)
  })
})
