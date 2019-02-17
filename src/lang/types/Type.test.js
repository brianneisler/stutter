import Type from './Type'
import deftype from '../deftype'

describe('Type', () => {
  describe('is', () => {
    test('Retruns true for a defined type', () => {
      const TestType = deftype('TestType', 'A test type')
      expect(Type.is(TestType)).toBe(true)
    })
  })
})
