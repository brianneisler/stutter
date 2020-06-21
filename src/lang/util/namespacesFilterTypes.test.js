import ImmutableMap from '../classes/ImmutableMap'
import Namespace from '../classes/Namespace'
import Seq from '../classes/Seq'
import Type from '../classes/Type'
import namespacesFilterTypes from './namespacesFilterTypes'

describe('namespacesFilterTypes', () => {
  test('filters types from multiple namespaces', () => {
    const BarType = new Type({
      class: class {}
    })

    const FooType = new Type({
      class: class {}
    })

    const BazType = new Type({
      class: class {}
    })

    const namespaces = ImmutableMap({
      bar: new Namespace(
        'bar',
        ImmutableMap({
          bar: {
            value: BarType
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
            value: BazType
          }
        })
      ),
      foo: new Namespace(
        'foo',
        ImmutableMap({
          foo: {
            value: FooType
          },
          foo2: {
            value: {}
          }
        })
      )
    })
    const results = namespacesFilterTypes(namespaces)
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual([BarType, BazType, FooType])
  })
})
