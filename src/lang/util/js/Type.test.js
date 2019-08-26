import ImmutableMap from './ImmutableMap'
import Type from './Type'

describe('js:Type', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const testDef = {
        class: class {},
        protocols: new ImmutableMap()
      }
      const instance = new Type(testDef)
      expect(instance).toBeInstanceOf(Type)
      expect(instance).toEqual({
        class: testDef.class,
        protocols: testDef.protocols
      })
    })

    test('defaults protocols to an empty ImmutableMap if none is provided', () => {
      const testDef = {
        class: class {}
      }
      const instance = new Type(testDef)
      expect(instance).toBeInstanceOf(Type)
      expect(instance).toEqual({
        class: testDef.class,
        protocols: new ImmutableMap()
      })
    })

    test('correctly sets the is method', () => {
      const testDef = {
        class: class {},
        protocols: new ImmutableMap(),
        is: () => {}
      }
      const instance = new Type(testDef)
      expect(instance.is).toBe(testDef.is)
    })

    test('correctly sets the to method', () => {
      const testDef = {
        class: class {},
        protocols: new ImmutableMap(),
        to: () => {}
      }
      const instance = new Type(testDef)
      expect(instance.to).toBe(testDef.to)
    })
  })

  describe('is', () => {
    it("throws if the `is` method is used when it hasn't been set", () => {
      const instance = new Type({
        class: class {},
        protocols: new ImmutableMap()
      })

      expect(() => {
        instance.is()
      }).toThrow(Error)
    })
  })

  describe('to', () => {
    it("throws if the `to` method is used when it hasn't been set", () => {
      const instance = new Type({
        class: class {},
        protocols: new ImmutableMap()
      })

      expect(() => {
        instance.to()
      }).toThrow(Error)
    })
  })
})
