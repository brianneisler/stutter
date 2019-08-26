import Exception from './Exception'
import Expected from './Expected'

describe('js:Exception', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const source = function() {}
      const target = {
        type: 'Argument',
        index: 0,
        value: 'test'
      }
      const expected = new Expected({
        expectation: 'foo',
        data: {},
        exceptionToError: () => {}
      })
      const instance = new Exception(source, target, expected)
      expect(instance).toBeInstanceOf(Exception)
      expect(instance).toMatchObject({
        source,
        target,
        expected,
        code: 'Expected:Argument:foo'
      })
    })
  })

  describe('toError', () => {
    test('calls the toError method of the expected', () => {
      const source = function() {}
      const target = {
        type: 'Argument',
        index: 0,
        value: 'test'
      }
      const expected = {
        toError: jest.fn(() => new Error('test'))
      }
      const instance = new Exception(source, target, expected)
      const result = instance.toError()
      expect(result).toBeInstanceOf(Error)
      expect(result.message).toBe('test')
    })
  })
})
