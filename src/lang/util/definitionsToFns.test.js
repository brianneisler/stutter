import Any from '../types/Any'
import Number from '../types/Number'
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
    expect(fns).toBeInstanceOf(Array)
    expect(fns.length).toBe(2)
    expect(fnGetMeta(fns[0]).parameters).toEqual([
      {
        name: 'num',
        type: Number
      },
      {
        name: 'str',
        type: String
      }
    ])

    expect(fnGetMeta(fns[1]).parameters).toEqual([
      {
        name: 'any',
        type: Any
      }
    ])
  })

  test('Returns Fns without modification', () => {
    const fn = definitionToFn(() => {})
    const fns = definitionsToFns([fn])
    expect(fns).toBeInstanceOf(Array)
    expect(fns.length).toBe(1)
    expect(fns[0]).toBe(fn)
  })

  test('Returns Fns without modification', () => {
    const fn = definitionToFn(() => {})
    expect(() => definitionsToFns([[Number], fn])).toThrowError(/^Cannot redefine/)
  })

  test('parameterizes functions with defaults', () => {
    const fns = definitionsToFns([
      (foo, bar) => {
        return bar
      }
    ])
    expect(fns).toBeInstanceOf(Array)
    expect(fns.length).toBe(1)
    expect(fnGetMeta(fns[0]).parameters).toEqual([
      {
        name: 'foo',
        type: Any
      },
      {
        name: 'bar',
        type: Any
      }
    ])
  })
})
