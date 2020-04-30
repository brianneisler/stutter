import objectPropertyIsEnumerable from './objectPropertyIsEnumerable'

describe('objectPropertyIsEnumerable', () => {
  test('array length is not eunmerable', () => {
    const array = []
    array[0] = 42
    expect(objectPropertyIsEnumerable(array, 0)).toBe(true)
    expect(objectPropertyIsEnumerable(array, 'length')).toBe(false)
  })
})
