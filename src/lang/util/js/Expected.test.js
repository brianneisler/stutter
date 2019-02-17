import Expected from './Expected'
import anyToStringTag from '../anyToStringTag'

describe('js:Expected', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const instance = new Expected({
        expectation: 'foo',
        data: {}
      })
      expect(instance).toBeInstanceOf(Expected)
      expect(instance).toMatchObject({
        expectation: 'foo',
        data: {}
      })
    })
  })

  describe('Symbol.toStringTag', () => {
    test('Returns back a custom StringTag', () => {
      const instance = new Expected({})
      expect(anyToStringTag(instance)).toBe('Expected')
    })
  })
})
