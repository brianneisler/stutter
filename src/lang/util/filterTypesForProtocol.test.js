import ImmutableList from '../classes/ImmutableList'
import ImmutableMap from '../classes/ImmutableMap'
import Namespace from '../classes/Namespace'
import Number from '../classes/Number'
import Protocol from '../classes/Protocol'
import Self from '../types/Self'
import String from '../classes/String'
import Type from '../classes/Type'
import filterTypesForProtocol from './filterTypesForProtocol'
import fn from '../fn'

describe('filterTypesForProtocol', () => {
  test('integration test - find a type defined using deftype', () => {
    // jest.mock('./root', () => ({}))
    // const deftype = require('../deftype')
    // deftype()
  })

  test('filter Protocols in an ImmutableMap of Namespaces', () => {
    const NumberType = new Type({
      class: Number
    })

    const BarProtocol = new Protocol(
      ImmutableMap({
        'foo.bar': ImmutableList([Self, NumberType])
      })
    )

    const StringType = new Type({
      class: String,
      protocols: [
        BarProtocol,
        {
          'foo.bar': fn([Self, NumberType], () => {})
        }
      ]
    })

    const namespaces = ImmutableMap({
      bar: new Namespace(
        'bar',
        ImmutableMap({
          [456]: {
            description: '',
            value: 456
          },
          bar: {
            description: '',
            value: 'bar'
          }
        })
      ),
      foo: new Namespace(
        'foo',
        ImmutableMap({
          [123]: {
            description: '',
            value: 123
          },
          BarProtocol: {
            description: '',
            value: BarProtocol
          },
          Number: {
            description: '',
            value: NumberType
          },
          String: {
            description: '',
            value: StringType
          }
        })
      )
    })
    const results = filterTypesForProtocol(BarProtocol, namespaces)
    expect(results).toEqual(ImmutableList([StringType]))
  })
})
