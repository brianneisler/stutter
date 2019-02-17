import anyToFunction from './anyToFunction'

describe('anyToFunction', () => {
  it('converts all other values to a function that returns the value', () => {
    expect(anyToFunction(undefined)()).toBe(undefined)
    expect(anyToFunction(null)()).toBe(null)
    expect(anyToFunction('')()).toBe('')
    expect(anyToFunction('abc')()).toBe('abc')
    expect(anyToFunction(false)()).toBe(false)
    expect(anyToFunction(true)()).toBe(true)
    expect(anyToFunction(0)()).toBe(0)
    expect(anyToFunction(-1)()).toBe(-1)
    expect(anyToFunction(1)()).toBe(1)
    expect(anyToFunction(NaN)()).toBe(NaN)
    expect(anyToFunction(Infinity)()).toBe(Infinity)
    expect(anyToFunction(-Infinity)()).toBe(-Infinity)
  })

  it('preserves object references', () => {
    const object = {}
    expect(anyToFunction(object)()).toBe(object)

    const regex = /abc/
    expect(anyToFunction(regex)()).toBe(regex)

    const arrayBuffer = new ArrayBuffer(2)
    expect(anyToFunction(arrayBuffer)()).toBe(arrayBuffer)

    const booleanFalse = new Boolean(false)
    expect(anyToFunction(booleanFalse)()).toBe(booleanFalse)

    const booleanTrue = new Boolean(true)
    expect(anyToFunction(booleanTrue)()).toBe(booleanTrue)

    const date = new Date()
    expect(anyToFunction(date)()).toBe(date)

    const error = new Error()
    expect(anyToFunction(error)()).toBe(error)

    const map = new Map()
    expect(anyToFunction(map)()).toBe(map)

    const number1 = new Number(1)
    expect(anyToFunction(number1)()).toBe(number1)

    const promise = new Promise(() => {})
    expect(anyToFunction(promise)()).toBe(promise)

    const proxy = new Proxy({}, {})
    expect(anyToFunction(proxy)()).toBe(proxy)

    const set = new Set()
    expect(anyToFunction(set)()).toBe(set)

    const stringABC = new String('abc')
    expect(anyToFunction(stringABC)()).toBe(stringABC)

    const symbolABC = Symbol('abc')
    expect(anyToFunction(symbolABC)()).toBe(symbolABC)

    const symbolGlobalDEF = Symbol.for('def')
    expect(anyToFunction(symbolGlobalDEF)()).toBe(symbolGlobalDEF)

    const weakMap = new WeakMap()
    expect(anyToFunction(weakMap)()).toBe(weakMap)

    const weakSet = new WeakSet()
    expect(anyToFunction(weakSet)()).toBe(weakSet)

    const generator = (function*() {})()
    expect(anyToFunction(generator)()).toBe(generator)
  })

  it('returns function as is', () => {
    expect(anyToFunction(async () => {})()).toBeInstanceOf(Promise)
    expect(anyToFunction(async function() {})()).toBeInstanceOf(Promise)
    expect(anyToFunction(() => 'foo')()).toBe('foo')
    expect(
      anyToFunction(function() {
        return 'foo'
      })()
    ).toBe('foo')

    const generator = anyToFunction(function*() {
      return 'foo'
    })()
    expect(generator.next).toBeInstanceOf(Function)
  })

  it('dispatches to the toFunction method if it exists', () => {
    const testFunction = () => {}
    const object = {
      toFunction() {
        return testFunction
      }
    }
    expect(anyToFunction(object)).toBe(testFunction)
  })
})
