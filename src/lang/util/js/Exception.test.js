import Exception from './Exception'
import Expected from './Expected'

describe('js:Exception', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const source = function() {}
      const target = {
        index: 0,
        type: 'Argument',
        value: 'test'
      }
      const expected = new Expected({
        data: {},
        exceptionToError: () => {},
        expectation: 'foo'
      })
      const instance = new Exception({ expected, source, target })
      expect(instance).toBeInstanceOf(Exception)
      expect(instance).toMatchObject({
        expected,
        source,
        target,
        type: 'Expected:Argument:foo'
      })
    })
  })

  describe('toError', () => {
    test('calls the toError method of the expected', () => {
      const source = function() {}
      const target = {
        index: 0,
        type: 'Argument',
        value: 'test'
      }
      const expected = {
        toError: jest.fn(() => new Error('test'))
      }
      const instance = new Exception({ expected, source, target })
      const result = instance.toError()
      expect(result).toBeInstanceOf(Error)
      expect(result.message).toBe('test')
    })
  })
})
