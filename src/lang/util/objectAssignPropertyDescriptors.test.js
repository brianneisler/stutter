import objectAssignPropertyDescriptors from './objectAssignPropertyDescriptors'

describe('objectAssignPropertyDescriptors', () => {
  test('assign property descriptors to an object', () => {
    const object1 = {}
    Object.defineProperty(object1, 'foo', {
      configurable: true,
      enumerable: true,
      value: 'bar'
    })
    const object2 = {}
    objectAssignPropertyDescriptors(object2, object1)
    expect(Object.getOwnPropertyDescriptor(object2, 'foo')).toEqual({
      configurable: true,
      enumerable: true,
      value: 'bar',
      writable: false
    })
  })
})
