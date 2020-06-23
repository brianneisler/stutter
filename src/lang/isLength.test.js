import { MAX_SAFE } from './constants/Integer'
import isLength from './isLength'

describe('isLength', () => {
  test('returns true for postive integer', () => {
    expect(isLength(123)).toBe(true)
  })

  test('returns true 0', () => {
    expect(isLength(0)).toBe(true)
  })

  test('returns true for MAX_SAFE', () => {
    expect(isLength(MAX_SAFE)).toBe(true)
  })

  test('returns false for negative integers', () => {
    expect(isLength(-1)).toBe(false)
  })

  test('returns false for -0', () => {
    expect(isLength(-0)).toBe(false)
  })

  test('returns false for real numbers that are not integers', () => {
    expect(isLength(1.23)).toBe(false)
  })

  test('returns false for integer greater than MAX_SAFE', () => {
    expect(isLength(MAX_SAFE + 1)).toBe(false)
  })
})
