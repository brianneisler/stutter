import { MAX_SAFE } from '../constants/Integer'
import anyIsPositiveInteger from './anyIsPositiveInteger'

describe('anyIsPositiveInteger', () => {
  test('returns true for 0', () => {
    expect(anyIsPositiveInteger(0)).toBe(true)
  })

  test('returns true for primitive numbers that are positive integers', () => {
    expect(anyIsPositiveInteger(1)).toBe(true)
    expect(anyIsPositiveInteger(MAX_SAFE)).toBe(true)
  })

  test('returns true for Number objects that are integers', () => {
    expect(anyIsPositiveInteger(new Number(0))).toBe(true)
    expect(anyIsPositiveInteger(new Number(1))).toBe(true)
  })

  test('returns false for primitive numbers that are not integers', () => {
    expect(anyIsPositiveInteger(-1.2)).toBe(false)
    expect(anyIsPositiveInteger(1.2)).toBe(false)
  })

  test('returns false for NaN', () => {
    expect(anyIsPositiveInteger(NaN)).toBe(false)
  })

  test('returns false for Infinity', () => {
    expect(anyIsPositiveInteger(Infinity)).toBe(false)
    expect(anyIsPositiveInteger(-Infinity)).toBe(false)
  })

  test('returns false for MIN_VALUE', () => {
    expect(anyIsPositiveInteger(Number.MIN_VALUE)).toBe(false)
  })

  test('returns false for string values that are string integers', () => {
    expect(anyIsPositiveInteger('3')).toBe(false)
  })

  test('returns false for Number objects that are not integers', () => {
    expect(anyIsPositiveInteger(new Number(-1.2))).toBe(false)
    expect(anyIsPositiveInteger(new Number(1.2))).toBe(false)
    expect(anyIsPositiveInteger(new Number(NaN))).toBe(false)
    expect(anyIsPositiveInteger(new Number(Infinity))).toBe(false)
    expect(anyIsPositiveInteger(new Number(-Infinity))).toBe(false)
  })

  test('returns false for all other values', () => {
    expect(anyIsPositiveInteger(undefined)).toBe(false)
    expect(anyIsPositiveInteger(null)).toBe(false)
    expect(anyIsPositiveInteger(false)).toBe(false)
    expect(anyIsPositiveInteger(true)).toBe(false)
    expect(anyIsPositiveInteger('')).toBe(false)
    expect(anyIsPositiveInteger('abc')).toBe(false)
    expect(anyIsPositiveInteger(/abc/)).toBe(false)
    expect(anyIsPositiveInteger([])).toBe(false)
    expect(anyIsPositiveInteger({})).toBe(false)
    expect(anyIsPositiveInteger(async () => {})).toBe(false)
    expect(anyIsPositiveInteger(() => {})).toBe(false)
    expect(anyIsPositiveInteger(function () {})).toBe(false)
    expect(anyIsPositiveInteger(function* () {})).toBe(false)
    expect(anyIsPositiveInteger((function* () {})())).toBe(false)
    expect(anyIsPositiveInteger(new Array(0))).toBe(false)
    expect(anyIsPositiveInteger(new ArrayBuffer(2))).toBe(false)
    expect(anyIsPositiveInteger(new Boolean(false))).toBe(false)
    expect(anyIsPositiveInteger(new Boolean(true))).toBe(false)
    expect(anyIsPositiveInteger(new Date())).toBe(false)
    expect(anyIsPositiveInteger(new Error())).toBe(false)
    expect(anyIsPositiveInteger(new Promise(() => {}))).toBe(false)
    expect(anyIsPositiveInteger(new Proxy({}, {}))).toBe(false)
    expect(anyIsPositiveInteger(new Set())).toBe(false)
    expect(anyIsPositiveInteger(new String())).toBe(false)
    expect(anyIsPositiveInteger(new String(''))).toBe(false)
    expect(anyIsPositiveInteger(new String('abc'))).toBe(false)
    expect(anyIsPositiveInteger(Symbol('abc'))).toBe(false)
    expect(anyIsPositiveInteger(new WeakMap())).toBe(false)
    expect(anyIsPositiveInteger(new WeakSet())).toBe(false)
  })
})
