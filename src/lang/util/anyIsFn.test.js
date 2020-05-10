import { FN } from '../constants/Symbol'
import { values } from '../../../tests'
import anyIsFn from './anyIsFn'
import definitionToFn from './definitionToFn'

describe('anyIsFn', () => {
  test('returns true for a function with an Fn symbol', () => {
    const fn = definitionToFn(() => {})
    expect(anyIsFn(fn)).toBe(true)
  })

  test('returns true for an Fn instance', () => {
    const fn = definitionToFn(() => {})
    expect(anyIsFn(fn[FN])).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsFn).toHaveReturnedFalsyForValues(values())
  })
})
