import ImmutableList from './js/ImmutableList'
import ImmutableMap from './js/ImmutableMap'
import Namespace from './js/Namespace'
import Number from './js/Number'
import Protocol from './js/Protocol'
import Self from '../types/Self'
import String from './js/String'
import Type from './js/Type'
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
      protocols: ImmutableMap([
        [
          BarProtocol,
          {
            'foo.bar': fn([Self, NumberType], () => {})
          }
        ]
      ])
    })

    const namespaces = ImmutableMap({
      foo: new Namespace(
        'foo',
        ImmutableMap({
          Number: {
            description: '',
            value: NumberType
          },
          String: {
            description: '',
            value: StringType
          },
          BarProtocol: {
            description: '',
            value: BarProtocol
          },
          [123]: {
            description: '',
            value: 123
          }
        })
      ),
      bar: new Namespace(
        'bar',
        ImmutableMap({
          bar: {
            description: '',
            value: 'bar'
          },
          [456]: {
            description: '',
            value: 456
          }
        })
      )
    })
    const results = filterTypesForProtocol(BarProtocol, namespaces)
    expect(results).toEqual(ImmutableList([StringType]))
  })
})
