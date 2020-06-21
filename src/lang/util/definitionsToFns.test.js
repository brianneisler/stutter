import Any from '../types/Any'
import ImmutableList from '../classes/ImmutableList'
import Number from '../types/Number'
import Parameter from '../classes/Parameter'
import String from '../types/String'
import definitionToFn from './definitionToFn'
import definitionsToFns from './definitionsToFns'
import fnGetMeta from './fnGetMeta'

describe('definitionsToFns', () => {
  test('parameterized multipe functions with fixed parameters', () => {
    const fns = definitionsToFns([
      [Number, String],
      (num, str) => {
        return str
      },

      [Any],
      (any) => {
        return any
      }
    ])
    expect(fns).toBeInstanceOf(ImmutableList)
    expect(fns.size).toBe(2)
    expect(fnGetMeta(fns.get(0)).parameters).toEqual([
      new Parameter('num', Number),
      new Parameter('str', String)
    ])

    expect(fnGetMeta(fns.get(1)).parameters).toEqual([
      new Parameter('any', Any)
    ])
  })

  test('Returns Fns without modification', () => {
    const fn = definitionToFn(() => {})
    const fns = definitionsToFns([fn])
    expect(fns).toBeInstanceOf(ImmutableList)
    expect(fns.size).toBe(1)
    expect(fns.get(0)).toBe(fn)
  })

  test('Allows for recasting of Fn with new definition', () => {
    const fn = definitionToFn((foo) => foo, [String])
    expect(fnGetMeta(fn).parameters).toEqual([new Parameter('foo', String)])
    const fns = definitionsToFns([[Number], fn])
    expect(fns.get(0)).not.toBe(fn)
    expect(fnGetMeta(fns.get(0)).parameters).toEqual([
      new Parameter('foo', Number)
    ])
  })

  test('parameterizes functions with defaults', () => {
    const fns = definitionsToFns([
      (foo, bar) => {
        return bar
      }
    ])
    expect(fns).toBeInstanceOf(ImmutableList)
    expect(fns.size).toBe(1)
    expect(fnGetMeta(fns.get(0)).parameters).toEqual([
      new Parameter('foo', Any),
      new Parameter('bar', Any)
    ])
  })
})
