import SYMBOL_FN from '../constants/SYMBOL_FN'
import definitionToFn from './definitionToFn'
import fnGetFunc from './fnGetFunc'

describe('fnGetFunc', () => {
  test('returns the func function for a function with an Fn symbol', () => {
    const func = () => {}
    const fn = definitionToFn(func)
    expect(fnGetFunc(fn)).toBe(func)
  })

  test('returns true for an Fn instance', () => {
    const func = () => {}
    const fn = definitionToFn(func)
    expect(fnGetFunc(fn[SYMBOL_FN])).toBe(func)
  })
})
