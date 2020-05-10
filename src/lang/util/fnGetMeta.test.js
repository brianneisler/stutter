import { FN } from '../constants/Symbol'
import Any from '../types/Any'
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
    expect(fnGetMeta(fn[FN])).toEqual({
      parameters: [],
      returns: Any
    })
  })
})
