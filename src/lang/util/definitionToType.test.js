import Number from '../types/Number'
import Protocol from './js/Protocol'
import Type from './js/Type'
import definitionToType from './definitionToType'
import fn from '../fn'

describe('definitionToType', () => {
  it('returns a Type instance with props set correctly', () => {
    const testDef = {
      class: class {},
      protocols: []
    }
    const type = definitionToType(testDef)
    expect(type).toBeInstanceOf(Type)
    expect(type).toEqual({
      class: testDef.class,
      protocols: new Map()
    })
  })

  it('accepts protocols and class optionally', () => {
    const type = definitionToType({})
    expect(type).toBeInstanceOf(Type)
    expect(type).toEqual({
      class: undefined,
      protocols: new Map()
    })
  })

  it('corectly handles a defined Protocols', () => {
    const FooProtocol = new Protocol({ foo: [Number] })
    const testDef = {
      class: class {},
      protocols: [
        FooProtocol,
        {
          foo: fn([Number], (foo) => foo)
        }
      ]
    }
    const type = definitionToType(testDef)
    expect(type).toEqual({
      class: testDef.class,
      protocols: new Map([[FooProtocol, testDef.protocols[1]]])
    })
  })
})
