import { values } from '../../../tests'
import anyIsFn from './anyIsFn'
import buildFn from './buildFn'

describe('anyIsFn', () => {
  test('returns true for an Fn', () => {
    const fn = buildFn(() => {})
    expect(anyIsFn(fn)).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsFn).toHaveReturnedFalsyForValues(values())
  })
})
