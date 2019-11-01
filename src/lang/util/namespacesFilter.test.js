import ImmutableMap from './js/ImmutableMap'
import Namespace from './js/Namespace'
import Seq from './js/Seq'
import namespacesFilter from './namespacesFilter'

describe('namespacesFilter', () => {
  test('returns defined values that match the filter function', () => {
    const namespaces = ImmutableMap({
      foo: new Namespace(
        'foo',
        ImmutableMap({
          bar: 'abc',
          baz: 123
        })
      )
    })
    const results = namespacesFilter(namespaces, (value) => typeof value === 'string')
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual(['abc'])
  })

  test('filters multiple namespaces', () => {
    const namespaces = ImmutableMap({
      foo: new Namespace(
        'foo',
        ImmutableMap({
          bar: 'abc',
          baz: 123
        })
      ),
      bar: new Namespace(
        'foo',
        ImmutableMap({
          bar: 'def',
          baz: 456
        })
      ),
      baz: new Namespace(
        'foo',
        ImmutableMap({
          bar: 'ghi',
          baz: 789
        })
      )
    })
    const results = namespacesFilter(namespaces, (value) => typeof value === 'string')
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual(['abc', 'def', 'ghi'])
  })
})