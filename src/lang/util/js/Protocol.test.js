import Number from '../../types/Number'
import Protocol from './Protocol'

describe('js:Protocol', () => {
  describe('constructor', () => {
    it('correctly constructs the `Protocol` instance', () => {
      const instance = new Protocol({
        foo: [Number]
      })
      expect(instance).toBeInstanceOf(Protocol)
      expect(instance).toEqual({
        definitions: {
          foo: [Number]
        }
      })
    })
  })

  describe('getDefinitions', () => {
    it('correctly returns the value Protocol was constructed with', () => {
      const instance = new Protocol({
        foo: [Number]
      })
      expect(instance).toBeInstanceOf(Protocol)
      expect(instance.getDefinitions()).toEqual({
        foo: [Number]
      })
    })
  })
})
