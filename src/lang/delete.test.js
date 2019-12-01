import ImmutableList from './util/js/ImmutableList'
import ImmutableMap from './util/js/ImmutableMap'
import _delete from './delete'

describe('_delete', () => {
  test('delete a single existing Prop from an Object using [Prop, Object] argument order', () => {
    const object = {
      foo: 'bar'
    }
    const result = _delete('foo', object)
    expect(result).toEqual({})
    expect(result).not.toBe(object)
  })

  test('delete a single existing Prop from an Object using [Object, Prop] argument order', () => {
    const object = {
      foo: 'bar'
    }
    const result = _delete(object, 'foo')
    expect(result).toEqual({})
    expect(result).not.toBe(object)
  })

  test('delete a single existing Prop using a Path from an Object using [Path, Object] argument order', () => {
    const object = {
      foo: 'bar'
    }
    const result = _delete(['foo'], object)
    expect(result).toEqual({})
    expect(result).not.toBe(object)
  })

  test('delete a single existing Symbol Prop from an Object using [Prop, Object] argument order', () => {
    const symbolFoo = Symbol('foo')
    const object = {
      [symbolFoo]: 'baz'
    }
    expect(_delete(symbolFoo, object)).toEqual({})
  })

  test('delete a single existing Symbol Prop from an Object using [Object, Prop] argument order', () => {
    const symbolFoo = Symbol('foo')
    const object = {
      [symbolFoo]: 'baz'
    }
    expect(_delete(object, symbolFoo)).toEqual({})
  })

  test('delete a single existing Index from an Array using [Index, Array] argument order', () => {
    const array = ['bar']

    const result = _delete(0, array)
    expect(result).toEqual([])
    expect(result).not.toBe(array)
    expect(array).toEqual(['bar'])
  })

  test('delete a single existing Index from an Array using [Array, Index] argument order', () => {
    const array = ['bar']

    const result = _delete(array, 0)
    expect(result).toEqual([])
    expect(result).not.toBe(array)
    expect(array).toEqual(['bar'])
  })

  test('delete a single existing Key from a Map using [Key, Map] argument order', () => {
    const map = new Map([['foo', 'bar']])

    const result = _delete('foo', map)
    expect(result).toEqual(new Map())
    expect(result).not.toBe(map)
    expect(map).toEqual(new Map([['foo', 'bar']]))
  })

  test('delete a single existing Key from a Map using [Map, Key] argument order', () => {
    const map = new Map([['foo', 'bar']])

    const result = _delete(map, 'foo')
    expect(result).toEqual(new Map())
    expect(result).not.toBe(map)
    expect(map).toEqual(new Map([['foo', 'bar']]))
  })

  test('delete a single existing Key from an ImmutableMap using [Key, ImmutableMap] argument order', () => {
    const map = new ImmutableMap([['foo', 'bar']])

    const result = _delete('foo', map)
    expect(result).toEqual(new ImmutableMap())
    expect(result).not.toBe(map)
    expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
  })

  test('delete a single existing Key from an ImmutableMap using [ImmutableMap, Key] argument order', () => {
    const map = new ImmutableMap([['foo', 'bar']])

    const result = _delete(map, 'foo')
    expect(result).toEqual(new ImmutableMap())
    expect(result).not.toBe(map)
    expect(map).toEqual(new ImmutableMap([['foo', 'bar']]))
  })

  test('delete an existing Symbol and a Prop from an Object', () => {
    const symbolFoo = Symbol('foo')
    const object = {
      bar: 'buz',
      [symbolFoo]: 'baz'
    }

    const result1 = _delete(symbolFoo, object)
    expect(result1).toEqual({
      bar: 'buz'
    })
    expect(object).toEqual({
      bar: 'buz',
      [symbolFoo]: 'baz'
    })

    const result2 = _delete('bar', result1)
    expect(result2).toEqual({})
    expect(result1).toEqual({
      bar: 'buz'
    })
    expect(object).toEqual({
      bar: 'buz',
      [symbolFoo]: 'baz'
    })
  })

  test('delete a single non existing Key from an Object', () => {
    const object = {
      foo: 'bar'
    }
    expect(_delete('bim', object)).toEqual({
      foo: 'bar'
    })
  })

  test('delete a single non existing Index from an Array', () => {
    const array = ['bar']
    expect(_delete(1, array)).toEqual(['bar'])
  })

  test('delete a single non existing Key from a Map', () => {
    const map = new Map([['foo', 'bar']])
    expect(_delete('bim', map)).toEqual(new Map([['foo', 'bar']]))
  })

  test('automatically upgrades to async when the target is a Promise', async () => {
    const object = Promise.resolve({
      foo: 'bar'
    })
    const result = _delete('foo', object)
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({})
  })

  test('automatically upgrades to async when the key is a Promise', async () => {
    const key = Promise.resolve('foo')
    const result = _delete(key, 'baz', {
      foo: 'bar'
    })
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({})
  })

  test('automatically upgrades to async when a Key in a Path is a Promise', async () => {
    const path = [Promise.resolve('foo')]
    const result = _delete(path, {
      foo: 'bar'
    })
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toEqual({})
  })
})
