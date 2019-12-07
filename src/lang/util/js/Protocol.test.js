import ImmutableList from './ImmutableList'
import ImmutableMap from './ImmutableMap'
import Number from '../../types/Number'
import Protocol from './Protocol'
import Self from '../../types/Self'

describe('js:Protocol', () => {
  describe('constructor', () => {
    it('correctly constructs the `Protocol` instance', () => {
      const instance = new Protocol(
        ImmutableMap({
          foo: ImmutableList([Self, Number])
        })
      )
      expect(instance).toBeInstanceOf(Protocol)
      expect(instance).toMatchObject({
        definitions: ImmutableMap({
          foo: ImmutableList([Self, Number])
        })
      })
    })
  })

  describe('getDefinitions', () => {
    it('correctly returns the value Protocol was constructed with', () => {
      const instance = new Protocol(
        ImmutableMap({
          foo: ImmutableList([Self, Number])
        })
      )
      expect(instance).toBeInstanceOf(Protocol)
      expect(instance.getDefinitions()).toEqual(
        ImmutableMap({
          foo: ImmutableList([Self, Number])
        })
      )
    })
  })
})
