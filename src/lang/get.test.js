import './types'
import ImmutableList from './classes/ImmutableList'
import ImmutableMap from './classes/ImmutableMap'
import get from './get'
import path from './path'

describe('get', () => {
  describe('Object', () => {
    test('get a single existing Property from an Object using [Property, Object] argument order', () => {
      const object = {
        foo: 'bar'
      }
      const result = get('foo', object)
      expect(result).toEqual('bar')
    })

    test('get a single existing Property from an Object using [Object, Property] argument order', () => {
      const object = {
        foo: 'bar'
      }
      const result = get(object, 'foo')
      expect(result).toEqual('bar')
    })

    test('get a single non-existing Property from an Object using [Property, Object] argument order', () => {
      const value = {
        foo: 'bar'
      }
      expect(get('bim', value)).toBe(undefined)
    })

    test('get from nil values throws error', () => {
      expect(() => get('foo', undefined)).toThrow(/foo/)
      expect(() => get('foo', null)).toThrow(/foo/)
    })

    test('`undefined` is NOT considered a Property', () => {
      const value = {
        [undefined]: 'foo'
      }
      expect(() => get(undefined, value)).toThrow()
    })

    test('`null` is NOT considered a Property for Object', () => {
      const value = {
        [null]: 'foo'
      }
      expect(() => get(null, value)).toThrow()
    })

    test('Booleans are not considered Properties for Object', () => {
      const value = {
        [false]: 'foo',
        [true]: 'bar'
      }
      expect(() => get(false, value)).toThrow()
      expect(() => get(true, value)).toThrow()
    })

    test('`Number` is NOT considered a Property for Object', () => {
      const value = {
        [0]: 'foo'
      }
      expect(() => get(0, value)).toThrow()
    })

    test('supports Symbol values as Property for Object', () => {
      const sym = Symbol('foo')
      const value = {
        [sym]: 'foo'
      }
      expect(get(sym, value)).toBe('foo')
    })

    test('does not convert dot props to paths', () => {
      const value = {
        foo: {
          bar: 'foobar'
        }
      }
      expect(get('foo.bar', value)).toBe(undefined)
    })

    test('works with props that have dots', () => {
      const value = {
        'foo.bar': 'foobar'
      }
      expect(get('foo.bar', value)).toBe('foobar')
    })

    test('supports array syntax', () => {
      const value = {
        foo: ['foobar']
      }
      const result = get(path('foo[0]'), value)
      expect(result).toBe('foobar')
    })
  })

  describe('Array', () => {
    test('supports accessing Arrays with Paths', () => {
      const value = ['foobar']
      expect(get(path('[0]'), value)).toBe('foobar')
    })

    test('supports accessing arrays directly with Number in Path', () => {
      const value = ['foobar']
      expect(get([0], value)).toBe('foobar')
    })

    test('get a single existing Index from an Array using [Index, Array] argument order', () => {
      const array = ['foo', 'bar']
      const result = get(1, array)
      expect(result).toEqual('bar')
      expect(array).toEqual(['foo', 'bar'])
    })

    test('get a single existing Index from an Array using [Array, Index] argument order', () => {
      const array = ['foo', 'bar']
      const result = get(array, 1)
      expect(result).toEqual('bar')
      expect(array).toEqual(['foo', 'bar'])
    })
  })

  describe('Map', () => {
    test('get a single existing Key from an Map using [Key, Map] argument order', () => {
      const map = new Map([['foo', 'bar']])

      const result = get('foo', map)
      expect(result).toEqual('bar')
      expect(map).toEqual(new Map([['foo', 'bar']]))
    })

    test('get a single existing Key from an Map using [Map, Key] argument order', () => {
      const map = new Map([['foo', 'bar']])

      const result = get(map, 'foo')
      expect(result).toEqual('bar')
      expect(map).toEqual(new Map([['foo', 'bar']]))
    })
  })

  describe('ImmutableMap', () => {
    test('get a single existing Key from an ImmutableMap using [Key, ImmutableMap] argument order', () => {
      const map = new ImmutableMap([['foo', 'bar']])

      const result = get('foo', map)
      expect(result).toEqual('bar')
      expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
    })

    test('get a single existing Key from an ImmutableMap using [ImmutableMap, Key] argument order', () => {
      const map = new ImmutableMap([['foo', 'bar']])

      const result = get(map, 'foo')
      expect(result).toEqual('bar')
      expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
    })

    test('get a nested existing Key from an ImmutableMap using [Path, ImmutableMap] argument order', () => {
      const map = new ImmutableMap([['foo', { bar: 'baz' }]])

      const result = get(map, path(['foo', 'bar']))
      expect(result).toEqual('baz')
      expect(map).toEqual(new ImmutableMap([['foo', { bar: 'baz' }]]))
    })
  })

  describe('ImmutableList', () => {
    test('get a single existing Index from an ImmutableList using [Index, ImmutableList] argument order', () => {
      const list = new ImmutableList(['foo'])

      const result = get(0, list)
      expect(result).toEqual('foo')
      expect(list).toEqual(new ImmutableList(['foo']))
    })

    test('get a single existing Index from an ImmutableList using [ImmutableList, Index] argument order', () => {
      const list = new ImmutableList(['foo'])

      const result = get(list, 0)
      expect(result).toEqual('foo')
      expect(result).not.toBe(list)
      expect(list).toEqual(new ImmutableList(['foo']))
    })
  })

  describe('String', () => {
    test('get a single existing Index from a String using [Index, String] argument order', () => {
      const string = 'foo'

      const result = get(0, string)
      expect(result).toEqual('f')
      expect(string).toEqual('foo')
    })

    test('get a single existing Index from an String using [String, Index] argument order', () => {
      const string = 'foo'

      const result = get(string, 0)
      expect(result).toEqual('f')
      expect(result).not.toBe(string)
      expect(string).toEqual('foo')
    })
  })

  describe('Path', () => {
    test('get a nest path of Immutable and mutable data structures', () => {})

    test('get from a nested Map', () => {
      const value = {
        foo: new Map([
          [
            'bar',
            {
              bim: 'bop'
            }
          ]
        ])
      }
      expect(get(path('foo.bar.bim'), value)).toBe('bop')
    })

    test('empty path returns the value', () => {
      expect(get(path([]), { a: 'b' })).toEqual({ a: 'b' })
      expect(get(path([]), {})).toEqual({})
      expect(get(path([]), [])).toEqual([])
      expect(get(path([]), 'foo')).toBe('foo')
      expect(get(path([]), 123)).toBe(123)
      expect(get(path([]), null)).toBe(null)
      expect(get(path([]), undefined)).toBe(undefined)
    })
  })

  test('curries the get method', () => {
    const value = {
      foo: 'bar'
    }
    const getFoo = get('foo')
    expect(getFoo(value)).toBe('bar')
  })

  test('executes getter if prop is function', () => {
    const value = {
      foo: 'bar'
    }
    expect(get((val) => val.foo, value)).toBe('bar')
    expect(get((val) => val.bar, value)).toBe(undefined)
  })
})
