import ImmutableList from './util/js/ImmutableList'
import ImmutableMap from './util/js/ImmutableMap'
import has from './has'
import path from './path'

describe('has', () => {
  describe('Object', () => {
    test('has a single existing Property from an Object using [Property, Object] argument order', () => {
      const object = {
        foo: 'bar'
      }
      const result = has('foo', object)
      expect(result).toEqual(true)
    })

    test('has a single existing Property from an Object using [Object, Property] argument order', () => {
      const object = {
        foo: 'bar'
      }
      const result = has(object, 'foo')
      expect(result).toEqual(true)
    })

    test('has a single non-existing Property from an Object using [Property, Object] argument order', () => {
      const value = {
        foo: 'bar'
      }
      expect(has('bim', value)).toBe(false)
    })

    test('has from nil values throws error', () => {
      expect(() => has('foo', undefined)).toThrow(/foo/)
      expect(() => has('foo', null)).toThrow(/foo/)
    })

    test('`undefined` is NOT considered a Property', () => {
      const value = {
        [undefined]: 'foo'
      }
      expect(() => has(undefined, value)).toThrow()
    })

    test('`null` is NOT considered a Property for Object', () => {
      const value = {
        [null]: 'foo'
      }
      expect(() => has(null, value)).toThrow()
    })

    test('Booleans are not considered Properties for Object', () => {
      const value = {
        [false]: 'foo',
        [true]: 'bar'
      }
      expect(() => has(false, value)).toThrow()
      expect(() => has(true, value)).toThrow()
    })

    test('`Number` is NOT considered a Property for Object', () => {
      const value = {
        [0]: 'foo'
      }
      expect(() => has(0, value)).toThrow()
    })

    test('supports Symbol values as Property for Object', () => {
      const sym = Symbol('foo')
      const value = {
        [sym]: 'foo'
      }
      expect(has(sym, value)).toBe(true)
    })

    test('does not convert dot props to paths', () => {
      const value = {
        foo: {
          bar: 'foobar'
        }
      }
      expect(has('foo.bar', value)).toBe(false)
    })

    test('works with props that have dots', () => {
      const value = {
        'foo.bar': 'foobar'
      }
      expect(has('foo.bar', value)).toBe(true)
    })

    test('supports array syntax', () => {
      const value = {
        foo: ['foobar']
      }
      const result = has(path('foo[0]'), value)
      expect(result).toBe(true)
    })
  })

  describe('Map', () => {
    test('has from a nested Map', () => {
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
      expect(has(path('foo.bar.bim'), value)).toBe(true)
    })
  })

  describe('Array', () => {
    test('supports accessing Arrays with Paths', () => {
      const value = ['foobar']
      expect(has(path('[0]'), value)).toBe(true)
    })

    test('supports accessing arrays directly with Number in Path', () => {
      const value = ['foobar']
      expect(has([0], value)).toBe(true)
    })
  })

  describe('ImmutableMap', () => {
    test('has a single existing Key from an ImmutableMap using [Key, ImmutableMap] argument order', () => {
      const map = new ImmutableMap([['foo', 'bar']])

      const result = has('foo', map)
      expect(result).toEqual(true)
      expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
    })

    test('has a single existing Key from an ImmutableMap using [ImmutableMap, Key] argument order', () => {
      const map = new ImmutableMap([['foo', 'bar']])

      const result = has(map, 'foo')
      expect(result).toEqual(true)
      expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
    })

    test('has a nested existing Key from an ImmutableMap using [Path, ImmutableMap] argument order', () => {
      const map = new ImmutableMap([['foo', { bar: 'baz' }]])

      const result = has(map, path(['foo', 'bar']))
      expect(result).toEqual(true)
      expect(map).toEqual(new ImmutableMap([['foo', { bar: 'baz' }]]))
    })
  })

  describe('ImmutableList', () => {
    test('has a single existing Index from an ImmutableList using [Index, ImmutableList] argument order', () => {
      const list = new ImmutableList(['foo'])

      const result = has(0, list)
      expect(result).toEqual(true)
      expect(list).toEqual(new ImmutableList(['foo']))
    })

    test('has a single existing Index from an ImmutableList using [ImmutableList, Index] argument order', () => {
      const list = new ImmutableList(['foo'])

      const result = has(list, 0)
      expect(result).toEqual(true)
      expect(list).toEqual(new ImmutableList(['foo']))
    })
  })
})
