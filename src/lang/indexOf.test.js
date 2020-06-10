import indexOf from './indexOf'

describe('indexOf', () => {
  describe('Array', () => {
    test('returns index of a String in an Array', () => {
      const array = ['a', 'b', 'c']
      expect(indexOf(array, 'a')).toBe(0)
    })
  })
})
