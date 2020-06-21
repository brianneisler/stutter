import valueOfIdentical from './valueOfIdentical'

describe('valueOfIdentical', () => {
  test('returns true for objects that return identical values', () => {
    const object1 = {
      valueOf: () => 'foo'
    }
    const object2 = {
      valueOf: () => 'foo'
    }
    expect(valueOfIdentical(object1, object2)).toBe(true)
  })
})
