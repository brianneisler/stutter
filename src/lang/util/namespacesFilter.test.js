import ImmutableMap from '../classes/ImmutableMap'
import Namespace from '../classes/Namespace'
import Seq from '../classes/Seq'
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
    const results = namespacesFilter(
      namespaces,
      (value) => typeof value === 'string'
    )
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual(['abc'])
  })

  test('filters multiple namespaces', () => {
    const namespaces = ImmutableMap({
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
      ),
      foo: new Namespace(
        'foo',
        ImmutableMap({
          bar: 'abc',
          baz: 123
        })
      )
    })
    const results = namespacesFilter(
      namespaces,
      (value) => typeof value === 'string'
    )
    expect(results).toBeInstanceOf(Seq)
    expect(results.toArray()).toEqual(['def', 'ghi', 'abc'])
  })
})
