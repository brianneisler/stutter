import Exception from './Exception'
import Expected from './Expected'
import anyToStringTag from '../anyToStringTag'

describe('js:Expected', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const instance = new Expected({
        data: {},
        exceptionToError: () => {},
        expectation: 'foo'
      })
      expect(instance).toBeInstanceOf(Expected)
      expect(instance).toMatchObject({
        data: {},
        expectation: 'foo'
      })
    })
  })

  describe('Symbol.toStringTag', () => {
    test('Returns back a custom StringTag', () => {
      const instance = new Expected({
        data: {},
        exceptionToError: () => {},
        expectation: 'foo'
      })
      expect(anyToStringTag(instance)).toBe('Expected')
    })
  })

  describe('toError', () => {
    test('Returns an Error from the given exception', () => {
      const error = new Error('foo')
      const exceptionToError = jest.fn(() => error)
      const expected = new Expected({
        data: {},
        exceptionToError,
        expectation: 'foo'
      })
      const source = function() {}
      const target = {
        index: 0,
        type: 'Argument',
        value: 'test'
      }
      const exception = new Exception(source, target, expected)
      const result = expected.toError(exception)
      expect(result).toBe(error)
      expect(exceptionToError).toHaveBeenCalledWith(exception, expected)
    })
  })
})
