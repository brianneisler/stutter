import ImmutableMap from '../classes/ImmutableMap'

import cacheChain from './cacheChain'

describe('cacheChain', () => {
  test('returns same cache key for a primitive string', () => {
    const key1 = cacheChain('foo')
    const key2 = cacheChain('foo')
    expect(key1).toBe(key2)
  })

  test('returns different cache keys for different primitive strings', () => {
    const key1 = cacheChain('foo')
    const key2 = cacheChain('bar')
    expect(key1).not.toBe(key2)
  })

  test('returns same cache key for undefined', () => {
    const key1 = cacheChain(undefined)
    const key2 = cacheChain(undefined)
    expect(key1).toBe(key2)
  })

  test('returns same cache key for null', () => {
    const key1 = cacheChain(null)
    const key2 = cacheChain(null)
    expect(key1).toBe(key2)
  })

  test('returns different cache keys for undefined and null', () => {
    const key1 = cacheChain(undefined)
    const key2 = cacheChain(null)
    expect(key1).not.toBe(key2)
  })

  test('returns same cache key for same object', () => {
    const object = {}
    const key1 = cacheChain(object)
    const key2 = cacheChain(object)
    expect(key1).toBe(key2)
  })

  test('returns different cache keys for different object instances that are equal in value', () => {
    const key1 = cacheChain({ foo: 'bar' })
    const key2 = cacheChain({ foo: 'bar' })
    expect(key1).not.toBe(key2)
  })

  test('returns same cache key for same instance of immutable object', () => {
    const imMap = ImmutableMap({})
    const key1 = cacheChain(imMap)
    const key2 = cacheChain(imMap)
    expect(key1).toBe(key2)
  })

  test('returns same cache key for different instances of immutable objects that are equal in value', () => {
    const imMap1 = ImmutableMap({ foo: 'bar' })
    const imMap2 = ImmutableMap({ foo: 'bar' })
    expect(imMap1).not.toBe(imMap2)
    const key1 = cacheChain(imMap1)
    const key2 = cacheChain(imMap2)
    expect(key1).toBe(key2)
  })

  test('returns different cache keys for different object instances that are equal in value', () => {
    const imMap1 = ImmutableMap({ bar: 'baz', foo: 'bar' })
    const imMap2 = ImmutableMap({ foo: 'bar' })

    const key1 = cacheChain(imMap1)
    const key2 = cacheChain(imMap2)
    expect(key1).not.toBe(key2)
  })
})
