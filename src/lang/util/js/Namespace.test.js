import ImmutableMap from './ImmutableMap'
import Namespace from './Namespace'
import Seq from './Seq'

describe('js:Namespace', () => {
  describe('constructor', () => {
    test('correctly constructs the Namespace instance', () => {
      const instance = new Namespace('foo')
      expect(instance).toBeInstanceOf(Namespace)
      expect(instance).toEqual({
        name: 'foo',
        mappings: ImmutableMap()
      })
    })
  })

  describe('constructor', () => {
    test('correctly constructs the Namespace instance with mappings', () => {
      const instance = new Namespace(
        'foo',
        ImmutableMap({
          bar: 'value'
        })
      )
      expect(instance).toBeInstanceOf(Namespace)
      expect(instance).toEqual({
        name: 'foo',
        mappings: ImmutableMap({
          bar: 'value'
        })
      })
    })
  })

  describe('get', () => {
    test('get a value set to a mapping', () => {
      const bar = {}
      const instance = new Namespace(
        'foo',
        ImmutableMap({
          bar
        })
      )
      expect(instance.get('bar')).toBe(bar)
    })
  })

  describe('set', () => {
    test('set a value to a mapping immutably', () => {
      const instance = new Namespace('foo')
      const bar = {}
      const result = instance.set('bar', bar)
      expect(result).not.toBe(instance)
      expect(instance.mappings).toEqual(ImmutableMap())
      expect(result.mappings).toEqual(
        ImmutableMap({
          bar
        })
      )
    })
  })

  describe('toName', () => {
    test('returns the value passed in for `name`', () => {
      const instance = new Namespace('foo')
      expect(instance.toName()).toBe('foo')
    })
  })

  describe('filter', () => {
    test('filters the namespace values and returns the results as a Seq', () => {
      const instance = new Namespace(
        'foo',
        ImmutableMap({
          foo: 123,
          bar: 'abc'
        })
      )
      const result = instance.filter((value) => typeof value === 'number')
      expect(result).toBeInstanceOf(Seq)
      expect(result.toArray()).toEqual([123])
    })
  })
})
