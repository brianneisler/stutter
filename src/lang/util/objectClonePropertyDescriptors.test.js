import objectClonePropertyDescriptors from './objectClonePropertyDescriptors'

describe('objectClonePropertyDescriptors', () => {
  test('clone property descriptors from an object', () => {
    const object1 = {}
    Object.defineProperty(object1, 'foo', {
      configurable: true,
      enumerable: true,
      value: 'bar'
    })
    const object2 = objectClonePropertyDescriptors(object1)
    expect(Object.getOwnPropertyDescriptor(object2, 'foo')).toEqual({
      configurable: true,
      enumerable: true,
      value: 'bar',
      writable: false
    })
    expect(object1).not.toBe(object2)
  })
})
