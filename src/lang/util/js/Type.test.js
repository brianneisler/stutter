import ImmutableMap from './ImmutableMap'
import Parameter from './Parameter'
import Self from '../../types/Self'
import Type from './Type'
import anyIsFn from '../anyIsFn'
import definitionToFn from '../definitionToFn'
import definitionsToProtocol from '../definitionsToProtocol'
import fnGetMeta from '../fnGetMeta'

describe('js:Type', () => {
  describe('constructor', () => {
    test('correctly constructs the Type instance', () => {
      const testDef = {
        class: class {},
        protocols: []
      }
      const instance = new Type(testDef)
      expect(instance).toBeInstanceOf(Type)
      expect(instance).toMatchObject({
        class: testDef.class,
        protocols: new ImmutableMap()
      })
    })

    test('defaults protocols to an empty ImmutableMap if none is provided', () => {
      const testDef = {
        class: class {}
      }
      const instance = new Type(testDef)
      expect(instance).toBeInstanceOf(Type)
      expect(instance).toMatchObject({
        class: testDef.class,
        protocols: new ImmutableMap()
      })
    })

    test('correctly sets the is method', () => {
      const testDef = {
        class: class {},
        is: () => {},
        protocols: []
      }
      const instance = new Type(testDef)
      expect(instance.is).toBe(testDef.is)
    })

    test('correctly sets the to method', () => {
      const testDef = {
        class: class {},
        protocols: [],
        to: () => {}
      }
      const instance = new Type(testDef)
      expect(instance.to).toBe(testDef.to)
    })

    test('sets the self property for Fns of Protocols', () => {
      const protocol = definitionsToProtocol({
        foo: [Self, () => Self]
      })
      const testDef = {
        class: class {},
        protocols: [
          protocol,
          { foo: definitionToFn((foo) => foo, [Self, () => Self]) }
        ],
        to: () => {}
      }
      const instance = new Type(testDef)
      const protocolFn = instance.protocols.get(protocol).foo
      expect(protocolFn).toBeInstanceOf(Function)
      expect(anyIsFn(protocolFn)).toBe(true)
      expect(fnGetMeta(protocolFn)).toEqual({
        parameters: [new Parameter('foo', Self)],
        returns: Self,
        self: instance
      })
    })
  })

  describe('getProtocols', () => {
    it('returns the Protocols of the Type', () => {
      const protocol = definitionsToProtocol({
        foo: [Self, () => Self]
      })
      const testDef = {
        class: class {},
        protocols: [
          protocol,
          { foo: definitionToFn((foo) => foo, [Self, () => Self]) }
        ],
        to: () => {}
      }
      const instance = new Type(testDef)
      const protocolFn = instance.getProtocols().get(protocol).foo
      expect(protocolFn).toBeInstanceOf(Function)
      expect(anyIsFn(protocolFn)).toBe(true)
      expect(fnGetMeta(protocolFn)).toEqual({
        parameters: [new Parameter('foo', Self)],
        returns: Self,
        self: instance
      })
    })
  })

  describe('is', () => {
    it("throws if the `is` method is used when it hasn't been set", () => {
      const instance = new Type({
        class: class {},
        protocols: []
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
        protocols: []
      })

      expect(() => {
        instance.to()
      }).toThrow(Error)
    })
  })
})
