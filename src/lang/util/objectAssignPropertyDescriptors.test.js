import objectAssignPropertyDescriptors from './objectAssignPropertyDescriptors'

describe('objectAssignPropertyDescriptors', () => {
  test('assign property descriptors to an object', () => {
    const object1 = {}
    Object.defineProperty(object1, 'foo', {
      value: 'bar',
      configurable: true,
      enumerable: true
    })
    const object2 = {}
    objectAssignPropertyDescriptors(object2, object1)
    expect(Object.getOwnPropertyDescriptor(object2, 'foo')).toEqual({
      value: 'bar',
      configurable: true,
      enumerable: true,
      writable: false
    })
  })
})
