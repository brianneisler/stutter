import Path from '../classes/Path'

import anyIsPath from './anyIsPath'

describe('anyIsPath', () => {
  test('returns true for empty Array', () => {
    expect(anyIsPath(new Path([]))).toBe(true)
    expect(anyIsPath(new Path(new Array()))).toBe(true)
  })

  test('returns true for plain string in Array', () => {
    expect(anyIsPath(new Path(['foo']))).toBe(true)
    expect(anyIsPath(new Path(['bar-']))).toBe(true)
    expect(anyIsPath(new Path(['bar1']))).toBe(true)
    expect(anyIsPath(new Path(['1bar']))).toBe(true)
  })

  test('returns true for numeric strings in Array', () => {
    expect(anyIsPath(new Path(['123']))).toBe(true)
    expect(anyIsPath(new Path(['-123']))).toBe(true)
    expect(anyIsPath(new Path(['0']))).toBe(true)
  })

  test('returns true for Symbols in Array', () => {
    expect(anyIsPath(new Path([Symbol('abc')]))).toBe(true)
    expect(anyIsPath(new Path([Symbol.for('foo')]))).toBe(true)
  })

  test('returns true for plain String objects in Array', () => {
    expect(anyIsPath(new Path([new String('foo')]))).toBe(true)
    expect(anyIsPath(new Path([new String('bar-')]))).toBe(true)
    expect(anyIsPath(new Path([new String('bar1')]))).toBe(true)
    expect(anyIsPath(new Path([new String('1bar')]))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsPath(undefined)).toBe(false)
    expect(anyIsPath(null)).toBe(false)
    expect(anyIsPath(false)).toBe(false)
    expect(anyIsPath(true)).toBe(false)
    expect(anyIsPath(0)).toBe(false)
    expect(anyIsPath(-1)).toBe(false)
    expect(anyIsPath(1)).toBe(false)
    expect(anyIsPath(NaN)).toBe(false)
    expect(anyIsPath(Infinity)).toBe(false)
    expect(anyIsPath(-Infinity)).toBe(false)
    expect(anyIsPath('abc')).toBe(false)
    expect(anyIsPath(new String('abc'))).toBe(false)
    expect(anyIsPath(Symbol('abc'))).toBe(false)
    expect(anyIsPath(Symbol.for('foo'))).toBe(false)
    expect(anyIsPath(/abc/)).toBe(false)
    expect(anyIsPath({})).toBe(false)
    expect(anyIsPath([])).toBe(false)
    expect(anyIsPath(async () => {})).toBe(false)
    expect(anyIsPath(() => {})).toBe(false)
    expect(anyIsPath(function () {})).toBe(false)
    expect(anyIsPath(function* () {})).toBe(false)
    expect(anyIsPath(new Array())).toBe(false)
    expect(anyIsPath(new ArrayBuffer(2))).toBe(false)
    expect(anyIsPath(new Boolean(false))).toBe(false)
    expect(anyIsPath(new Boolean(true))).toBe(false)
    expect(anyIsPath(new Date())).toBe(false)
    expect(anyIsPath(new Error())).toBe(false)
    expect(anyIsPath(new Number(-1.2))).toBe(false)
    expect(anyIsPath(new Number(1.2))).toBe(false)
    expect(anyIsPath(new Number(NaN))).toBe(false)
    expect(anyIsPath(new Number(Infinity))).toBe(false)
    expect(anyIsPath(new Number(-Infinity))).toBe(false)
    expect(anyIsPath(new Promise(() => {}))).toBe(false)
    expect(anyIsPath(new Proxy({}, {}))).toBe(false)
    expect(anyIsPath(new WeakMap())).toBe(false)
    expect(anyIsPath(new WeakSet())).toBe(false)
  })
})
