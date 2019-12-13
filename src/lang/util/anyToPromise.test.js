import anyToPromise from './anyToPromise'

describe('anyToPromise', () => {
  it('converts all other values to a Promise that resolves to the value', async () => {
    expect(await anyToPromise(undefined)).toBe(undefined)
    expect(await anyToPromise(null)).toBe(null)
    expect(await anyToPromise('')).toBe('')
    expect(await anyToPromise('abc')).toBe('abc')
    expect(await anyToPromise(false)).toBe(false)
    expect(await anyToPromise(true)).toBe(true)
    expect(await anyToPromise(0)).toBe(0)
    expect(await anyToPromise(-1)).toBe(-1)
    expect(await anyToPromise(1)).toBe(1)
    expect(await anyToPromise(NaN)).toBe(NaN)
    expect(await anyToPromise(Infinity)).toBe(Infinity)
    expect(await anyToPromise(-Infinity)).toBe(-Infinity)
  })

  it('preserves object references', async () => {
    const object = {}
    expect(await anyToPromise(object)).toBe(object)

    const regex = /abc/
    expect(await anyToPromise(regex)).toBe(regex)

    const arrayBuffer = new ArrayBuffer(2)
    expect(await anyToPromise(arrayBuffer)).toBe(arrayBuffer)

    const booleanFalse = new Boolean(false)
    expect(await anyToPromise(booleanFalse)).toBe(booleanFalse)

    const booleanTrue = new Boolean(true)
    expect(await anyToPromise(booleanTrue)).toBe(booleanTrue)

    const date = new Date()
    expect(await anyToPromise(date)).toBe(date)

    const error = new Error()
    expect(await anyToPromise(error)).toBe(error)

    const map = new Map()
    expect(await anyToPromise(map)).toBe(map)

    const number1 = new Number(1)
    expect(await anyToPromise(number1)).toBe(number1)

    const proxy = new Proxy({}, {})
    expect(await anyToPromise(proxy)).toBe(proxy)

    const set = new Set()
    expect(await anyToPromise(set)).toBe(set)

    const stringABC = new String('abc')
    expect(await anyToPromise(stringABC)).toBe(stringABC)

    const symbolABC = Symbol('abc')
    expect(await anyToPromise(symbolABC)).toBe(symbolABC)

    const symbolGlobalDEF = Symbol.for('def')
    expect(await anyToPromise(symbolGlobalDEF)).toBe(symbolGlobalDEF)

    const weakMap = new WeakMap()
    expect(await anyToPromise(weakMap)).toBe(weakMap)

    const weakSet = new WeakSet()
    expect(await anyToPromise(weakSet)).toBe(weakSet)

    const generator = function*() {}
    expect(await anyToPromise(generator)).toBe(generator)
  })

  it('returns Promise as is', async () => {
    const promise = new Promise(() => {})
    expect(anyToPromise(promise)).toBe(promise)
  })
})
