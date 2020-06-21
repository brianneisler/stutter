// import ImmutableList from '../classes/ImmutableList'
// import ImmutableMap from '../classes/ImmutableMap'
// import Namespace from '../classes/Namespace'
// import Protocol from '../classes/Protocol'
// import Self from '../types/Self'
// import String from '../classes/String'
// import Type from '../classes/Type'
// import anyIsOrSatisfies from './anyIsOrSatisfies'
// import fn from '../fn'

describe('anyIsOrSatisfies', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  it('returns true for a value that has the given protocol', () => {
    jest.mock('./root', () => ({}))

    const anyIsOrSatisfies = require('./anyIsOrSatisfies').default
    const deftype = require('../deftype').default

    const NumberType = deftype('test.Number', 'description', {
      class: Number,
      is: (any) => typeof any === 'number'
    })

    expect(anyIsOrSatisfies(0, NumberType)).toBe(true)
    expect(anyIsOrSatisfies('foo', NumberType)).toBe(false)
  })

  it('returns true for a value that has the given protocol', () => {
    jest.mock('./root', () => ({}))

    require('../types/Object')
    require('../types/String')
    require('../types/Protocol')
    const Self = require('../types/Self').default
    const anyIsOrSatisfies = require('./anyIsOrSatisfies').default
    const deftype = require('../deftype').default
    const defprotocol = require('../defprotocol').default
    const fn = require('../fn').default

    const BarProtocol = defprotocol('test.Bar', 'The BAR protocol', {
      'test.bar': [Self]
    })

    class Foo {}
    deftype('test.Foo', 'description', {
      class: Foo,
      is: (any) => any instanceof Foo,
      protocols: [
        BarProtocol,
        {
          'test.bar': fn([Self], () => {})
        }
      ]
    })

    expect(anyIsOrSatisfies(new Foo(), BarProtocol)).toBe(true)
    expect(anyIsOrSatisfies(1, BarProtocol)).toBe(false)
  })
})
