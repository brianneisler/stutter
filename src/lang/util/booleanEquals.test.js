import { booleans, values } from '../../test'
import arrayDifference from './arrayDifference'
import booleanEquals from './booleanEquals'

describe('booleanEquals', () => {
  test('true equals true', () => {
    expect(booleanEquals(true, true)).toBe(true)
  })

  test('true equals new Boolean(true)', () => {
    expect(booleanEquals(true, new Boolean(true))).toBe(true)
  })

  test('new Boolean(true) equals true', () => {
    expect(booleanEquals(new Boolean(true), true)).toBe(true)
  })

  test('false equals false', () => {
    expect(booleanEquals(false, false)).toBe(true)
  })

  test('false equals new Boolean(false)', () => {
    expect(booleanEquals(false, new Boolean(false))).toBe(true)
  })

  test('new Boolean(false) equals false', () => {
    expect(booleanEquals(new Boolean(false), false)).toBe(true)
  })

  test('true does not equal false', () => {
    expect(booleanEquals(true, false)).toBe(false)
  })

  test('false does not equal true', () => {
    expect(booleanEquals(false, true)).toBe(false)
  })

  test('true does not equal all other values', () => {
    expect((value) => booleanEquals(true, value)).toHaveReturnedFalsyForValues(
      arrayDifference(values(), booleans())
    )
  })

  test('false does not equal all other values', () => {
    expect((value) => booleanEquals(false, value)).toHaveReturnedFalsyForValues(
      arrayDifference(values(), booleans())
    )
  })
})
