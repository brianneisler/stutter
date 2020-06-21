import ImmutableList from '../classes/ImmutableList'
import ImmutableMap from '../classes/ImmutableMap'
import Number from '../types/Number'
import Protocol from '../classes/Protocol'
import Self from '../types/Self'
import Type from '../classes/Type'
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
    expect(type).toMatchObject({
      class: testDef.class,
      protocols: new ImmutableMap()
    })
  })

  it('accepts protocols and class optionally', () => {
    const type = definitionToType({})
    expect(type).toBeInstanceOf(Type)
    expect(type).toMatchObject({
      class: undefined,
      protocols: new ImmutableMap()
    })
  })

  it('corectly handles a defined Protocols', () => {
    const FooProtocol = new Protocol(
      ImmutableMap({ foo: ImmutableList([Self, Number]) })
    )
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
    expect(type).toMatchObject({
      class: testDef.class,
      protocols: expect.any(ImmutableMap)
    })
  })
})
