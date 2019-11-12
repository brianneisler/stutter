import Any from '../types/Any'
import SYMBOL_FN from '../constants/SYMBOL_FN'
import definitionToFn from './definitionToFn'
import fnGetMeta from './fnGetMeta'

describe('fnGetMeta', () => {
  test('returns the meta object for a function with an Fn symbol', () => {
    const fn = definitionToFn(() => {})
    expect(fnGetMeta(fn)).toEqual({
      parameters: [],
      returns: Any
    })
  })

  test('returns true for an Fn instance', () => {
    const fn = definitionToFn(() => {})
    expect(fnGetMeta(fn[SYMBOL_FN])).toEqual({
      parameters: [],
      returns: Any
    })
  })
})
