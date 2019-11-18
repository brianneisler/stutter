import String from '../types/String'
import anyIsSelf from './anyIsSelf'

describe('anyIsSelf', () => {
  test('returns true when type matches given self type', () => {
    expect(anyIsSelf('abc', { self: String })).toBe(true)
  })

  test('returns false when type does not match given self type', () => {
    expect(anyIsSelf(123, { self: String })).toBe(false)
  })

  test('Throws error when no meta value is supplied', () => {
    expect(() => anyIsSelf(123)).toThrow(/^anyIsSelf expects a 'meta'/)
  })
})
