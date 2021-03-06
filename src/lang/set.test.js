import './types'
import ImmutableMap from './classes/ImmutableMap'
import path from './path'
import set from './set'

describe('set', () => {
  describe('Object', () => {
    test('set to an object using a single existing string key', () => {
      const collection = {
        foo: 'bar'
      }
      const result = set('foo', 'baz', collection)
      expect(result).toEqual({
        foo: 'baz'
      })
      expect(result).not.toBe(collection)
    })

    test('set to an object using a Symbol', () => {
      const collection = {}
      const symFoo = Symbol('foo')
      expect(set(symFoo, 'baz', collection)).toEqual({
        [symFoo]: 'baz'
      })
    })

    test('set to an object using a Symbol then a prop', () => {
      const collection = {}
      const symFoo = Symbol('foo')
      const result1 = set(symFoo, 'baz', collection)
      expect(result1).toEqual({
        [symFoo]: 'baz'
      })
      expect(collection).toEqual({})

      const result2 = set('test', 'value', result1)
      expect(result2).toEqual({
        [symFoo]: 'baz',
        test: 'value'
      })
      expect(result1).toEqual({
        [symFoo]: 'baz'
      })
      expect(collection).toEqual({})
    })

    test('set to an object using a single existing key with dots', () => {
      const collection = {
        'foo.bar': 'baz'
      }
      expect(set('foo.bar', 'fum', collection)).toEqual({
        'foo.bar': 'fum'
      })
    })

    test('set to an object using a single non existing key', () => {
      const collection = {
        foo: 'bar'
      }
      expect(set('bim', 'bop', collection)).toEqual({
        bim: 'bop',
        foo: 'bar'
      })
    })
  })

  describe('Array', () => {
    test('set a single existing Index to an Array using [Index, Any, Array] argument order', () => {
      const array = ['foo', 'bar']
      const result = set(1, 'baz', array)
      expect(result).toEqual(['foo', 'baz'])
      expect(array).toEqual(['foo', 'bar'])
    })

    test('set a single existing Index to an Array using [Array, Index, Any] argument order', () => {
      const array = ['foo', 'bar']
      const result = set(array, 1, 'baz')
      expect(result).toEqual(['foo', 'baz'])
      expect(array).toEqual(['foo', 'bar'])
    })

    test('set to an array using a single non existing index', () => {
      const collection = ['bar']
      expect(set(1, 'bop', collection)).toEqual(['bar', 'bop'])
    })
  })

  describe('Map', () => {
    test('set to a Map using a single existing key', () => {
      const collection = new Map([['foo', 'bar']])
      expect([...set('foo', 'baz', collection).entries()]).toEqual([
        ['foo', 'baz']
      ])
    })

    test('set to a Map using an Array sets the Array as a Key', () => {
      const collection = new Map()
      expect([...set(['foo'], 'baz', collection).entries()]).toEqual([
        [['foo'], 'baz']
      ])
    })

    test('set to a Map using a single non existing key', () => {
      const collection = new Map([['foo', 'bar']])
      expect([...set('bim', 'bop', collection).entries()]).toEqual([
        ['foo', 'bar'],
        ['bim', 'bop']
      ])
    })
  })

  describe('ImmutableMap', () => {
    test('set to an ImmutableMap using a single existing key', () => {
      const collection = new ImmutableMap({ foo: 'bar' })
      expect(set('foo', 'baz', collection)).toEqual(
        ImmutableMap({
          foo: 'baz'
        })
      )
    })

    test('set to a ImmutableMap using a single non existing key', () => {
      const collection = new ImmutableMap({ foo: 'bar' })
      expect(set('bim', 'bop', collection)).toEqual(
        ImmutableMap({
          bim: 'bop',
          foo: 'bar'
        })
      )
    })
  })

  describe('Path', () => {
    test('set a single existing Key to an Object using [Path, Any, Object] argument order', () => {
      const collection = {
        foo: 'bar'
      }
      const result = set(path('foo'), 'baz', collection)
      expect(result).toEqual({
        foo: 'baz'
      })
      expect(result).not.toBe(collection)
    })

    test('set a single existing Key to an Object using [Object, Path, Any] argument order', () => {
      const collection = {
        foo: 'bar'
      }
      const result = set(collection, path('foo'), 'baz')
      expect(result).toEqual({
        foo: 'baz'
      })
      expect(result).not.toBe(collection)
    })
  })

  test('automatically upgrades to async when the collection is a Promise', async () => {
    const collection = Promise.resolve({
      foo: 'bar'
    })
    const result = set('foo', 'baz', collection)
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({
      foo: 'baz'
    })
  })

  test('automatically upgrades to async when the key is a Promise', async () => {
    const key = Promise.resolve('foo')
    const result = set(key, 'baz', {
      foo: 'bar'
    })
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({
      foo: 'baz'
    })
  })

  test('automatically upgrades to async when the value is a Promise', async () => {
    const value = Promise.resolve('baz')
    const result = set('foo', value, {
      foo: 'bar'
    })
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({
      foo: 'baz'
    })
  })
})
