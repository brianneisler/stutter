import { ITERATOR } from '../constants/Symbol'
import anyIsWalker from './anyIsWalker'

describe('anyIsWalker', () => {
  test('returns true for object with next, previous, down and up methods', () => {
    expect(
      anyIsWalker({
        down: () => ({
          done: true
        }),
        next: () => ({
          done: true
        }),
        previous: () => ({
          done: true
        }),
        up: () => ({
          done: true
        })
      })
    ).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsWalker(undefined)).toBe(false)
    expect(anyIsWalker(null)).toBe(false)
    expect(anyIsWalker(false)).toBe(false)
    expect(anyIsWalker(true)).toBe(false)
    expect(anyIsWalker(0)).toBe(false)
    expect(anyIsWalker(-1)).toBe(false)
    expect(anyIsWalker(1)).toBe(false)
    expect(anyIsWalker(NaN)).toBe(false)
    expect(anyIsWalker(Infinity)).toBe(false)
    expect(anyIsWalker(-Infinity)).toBe(false)
    expect(anyIsWalker(/abc/)).toBe(false)
    expect(anyIsWalker(async () => {})).toBe(false)
    expect(anyIsWalker(() => {})).toBe(false)
    expect(anyIsWalker(function () {})).toBe(false)
    expect(anyIsWalker(function* () {})).toBe(false)
    expect(anyIsWalker(new ArrayBuffer(2))).toBe(false)
    expect(anyIsWalker(new Boolean(false))).toBe(false)
    expect(anyIsWalker(new Boolean(true))).toBe(false)
    expect(anyIsWalker(new Date())).toBe(false)
    expect(anyIsWalker(new Error())).toBe(false)
    expect(anyIsWalker(new Number(-1.2))).toBe(false)
    expect(anyIsWalker(new Number(1.2))).toBe(false)
    expect(anyIsWalker(new Number(NaN))).toBe(false)
    expect(anyIsWalker(new Number(Infinity))).toBe(false)
    expect(anyIsWalker(new Number(-Infinity))).toBe(false)
    expect(anyIsWalker(new Promise(() => {}))).toBe(false)
    expect(anyIsWalker(new Proxy({}, {}))).toBe(false)
    expect(anyIsWalker(Symbol('abc'))).toBe(false)
    expect(anyIsWalker(new WeakMap())).toBe(false)
    expect(anyIsWalker(new WeakSet())).toBe(false)
    expect(anyIsWalker(new WeakSet())).toBe(false)
  })
})
