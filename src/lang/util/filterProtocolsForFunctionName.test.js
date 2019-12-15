import ImmutableList from './js/ImmutableList'
import ImmutableMap from './js/ImmutableMap'
import Namespace from './js/Namespace'
import Number from '../types/Number'
import Protocol from './js/Protocol'
import Self from '../types/Self'
import filterProtocolsForFunctionName from './filterProtocolsForFunctionName'

describe('filterProtocolsForFunctionName', () => {
  test('integration test - filter protocols defined using defprotocol', () => {
    // jest.mock('./root', () => ({}))
    // const defprotocol = require('../defprotocol')
    // defprotocol()
  })

  test('filter Protocols in an ImmutableMap of Namespaces', () => {
    const BarProtocol = new Protocol(
      ImmutableMap({
        'foo.bar': ImmutableList([Self, Number])
      })
    )
    const Bar2Protocol = new Protocol(
      ImmutableMap({
        'foo.bar': ImmutableList([Self, Number])
      })
    )
    const namespaces = ImmutableMap({
      bar: new Namespace(
        'bar',
        ImmutableMap({
          [456]: {
            description: '',
            value: 456
          },
          Bar2Protocol: {
            description: '',
            value: Bar2Protocol
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
          FooProtocol: {
            description: '',
            value: new Protocol(
              ImmutableMap({
                'foo.foo': ImmutableList([Self, Number])
              })
            )
          }
        })
      )
    })
    const results = filterProtocolsForFunctionName('foo.bar', namespaces)
    expect(results).toEqual(ImmutableList([BarProtocol, Bar2Protocol]))
  })
})
