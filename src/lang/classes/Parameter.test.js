import Parameter from './Parameter'
import Type from './Type'

describe('js:Parameter', () => {
  describe('constructor', () => {
    test('correctly constructs the Parameter instance', () => {
      const TestClass = class {}
      const testType = new Type({ class: TestClass })
      const instance = new Parameter('foo', testType)
      expect(instance).toBeInstanceOf(Parameter)
      expect(instance).toMatchObject({
        name: 'foo',
        type: testType
      })
    })
  })

  describe('toName', () => {
    test('returns the value passed in for `name`', () => {
      const TestClass = class {}
      const testType = new Type({ class: TestClass })
      const instance = new Parameter('foo', testType)
      expect(instance.toName()).toBe('foo')
    })
  })
})
