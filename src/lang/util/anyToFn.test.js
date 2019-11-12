import anyIsFn from './anyIsFn'
import anyToFn from './anyToFn'
import buildFn from './buildFn'

describe('anyToFn', () => {
  it('converts all other values to an Fn that returns the value', () => {
    expect(anyToFn(undefined)()).toBe(undefined)
    expect(anyToFn(null)()).toBe(null)
    expect(anyToFn('')()).toBe('')
    expect(anyToFn('abc')()).toBe('abc')
    expect(anyToFn(false)()).toBe(false)
    expect(anyToFn(true)()).toBe(true)
    expect(anyToFn(0)()).toBe(0)
    expect(anyToFn(-1)()).toBe(-1)
    expect(anyToFn(1)()).toBe(1)
    expect(anyToFn(NaN)()).toBe(NaN)
    expect(anyToFn(Infinity)()).toBe(Infinity)
    expect(anyToFn(-Infinity)()).toBe(-Infinity)
  })

  it('preserves object references', () => {
    const object = {}
    expect(anyToFn(object)()).toBe(object)

    const regex = /abc/
    expect(anyToFn(regex)()).toBe(regex)

    const arrayBuffer = new ArrayBuffer(2)
    expect(anyToFn(arrayBuffer)()).toBe(arrayBuffer)

    const booleanFalse = new Boolean(false)
    expect(anyToFn(booleanFalse)()).toBe(booleanFalse)

    const booleanTrue = new Boolean(true)
    expect(anyToFn(booleanTrue)()).toBe(booleanTrue)

    const date = new Date()
    expect(anyToFn(date)()).toBe(date)

    const error = new Error()
    expect(anyToFn(error)()).toBe(error)

    const map = new Map()
    expect(anyToFn(map)()).toBe(map)

    const number1 = new Number(1)
    expect(anyToFn(number1)()).toBe(number1)

    const proxy = new Proxy({}, {})
    expect(anyToFn(proxy)()).toBe(proxy)

    const set = new Set()
    expect(anyToFn(set)()).toBe(set)

    const stringABC = new String('abc')
    expect(anyToFn(stringABC)()).toBe(stringABC)

    const symbolABC = Symbol('abc')
    expect(anyToFn(symbolABC)()).toBe(symbolABC)

    const symbolGlobalDEF = Symbol.for('def')
    expect(anyToFn(symbolGlobalDEF)()).toBe(symbolGlobalDEF)

    const weakMap = new WeakMap()
    expect(anyToFn(weakMap)()).toBe(weakMap)

    const weakSet = new WeakSet()
    expect(anyToFn(weakSet)()).toBe(weakSet)

    // NOTE BRN: These are resolvables and are resolved by the type checking on
    // the return in Fn. Therefore they are not the same instances

    const promise = new Promise(() => {})
    expect(anyToFn(promise)()).toEqual(promise)

    const generator = (function*() {})()
    expect(anyToFn(generator)()).toEqual(generator)
  })

  it('returns function as an Fn', () => {
    const asyncFn = anyToFn(async () => {})
    expect(anyIsFn(asyncFn)).toBe(true)
    expect(asyncFn()).toBeInstanceOf(Promise)

    expect(anyToFn(async function() {})()).toBeInstanceOf(Promise)
    expect(anyToFn(() => 'foo')()).toBe('foo')
    expect(
      anyToFn(function() {
        return 'foo'
      })()
    ).toBe('foo')

    const generator = anyToFn(function*() {
      return 'foo'
    })()
    expect(generator.next).toBeInstanceOf(Function)
  })

  it('returns Fn as is', () => {
    const fn = buildFn(() => {})
    expect(anyToFn(fn)).toBe(fn)
  })

  it('dispatches to the toFn method if it exists', () => {
    const testFn = buildFn(() => {})
    const object = {
      toFn() {
        return testFn
      }
    }
    expect(anyToFn(object)).toBe(testFn)
  })

  it('dispatches to the toFunction method if it exists', () => {
    const testFunction = () => 'foo'
    const object = {
      toFunction() {
        return testFunction
      }
    }
    const result = anyToFn(object)
    expect(anyIsFn(result)).toBe(true)
    expect(result()).toBe('foo')
  })
})
