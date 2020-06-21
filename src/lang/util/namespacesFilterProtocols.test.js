import ImmutableMap from '../classes/ImmutableMap'
import Namespace from '../classes/Namespace'
import Number from '../types/Number'
import Protocol from '../classes/Protocol'
import Seq from '../classes/Seq'
import namespacesFilterProtocols from './namespacesFilterProtocols'

describe('namespacesFilterProtocols', () => {
  test('filters Protocols from multiple Namespaces', () => {
    const BarProtocol = new Protocol({
      bar: [Number]
    })

    const FooProtocol = new Protocol({
      foo: [Number]
    })

    const BazProtocol = new Protocol({
      baz: [Number]
    })

    const namespaces = ImmutableMap({
      bar: new Namespace(
        'bar',
        ImmutableMap({
          bar: {
            value: BarProtocol
          },
          bar2: {
            value: []
          }
        })
      ),
      baz: new Namespace(
        'baz',
        ImmutableMap({
          baz: {
            value: BazProtocol
          }
        })
      ),
      foo: new Namespace(
        'foo',
        ImmutableMap({
          foo: {
            value: FooProtocol
          },
          foo2: {
            value: {}
          }
        })
      )
    })
    const results = namespacesFilterProtocols(namespaces)
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual([BarProtocol, BazProtocol, FooProtocol])
  })
})
