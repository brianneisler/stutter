import anyToArray from './anyToArray'

describe('anyToArray', () => {
  it('converts nil values to an empty array', () => {
    expect(anyToArray(undefined)).toEqual([])
    expect(anyToArray(null)).toEqual([])
  })

  it('returns non array like values in an array', () => {
    expect(anyToArray(false)).toEqual([false])
    expect(anyToArray(true)).toEqual([true])
    expect(anyToArray(0)).toEqual([0])
    expect(anyToArray(-1)).toEqual([-1])
    expect(anyToArray(1)).toEqual([1])
    expect(anyToArray(NaN)).toEqual([NaN])
    expect(anyToArray(Infinity)).toEqual([Infinity])
    expect(anyToArray(-Infinity)).toEqual([-Infinity])
  })

  it('preserves existing array', () => {
    const array = ['a', 'b', 'c']
    const result = anyToArray(array)
    expect(result).toBe(array)
    expect(result).toEqual(['a', 'b', 'c'])
  })

  it('converts object into array of values', () => {
    const object = {
      a: 1,
      b: 2,
      c: 3
    }
    expect(anyToArray(object)).toEqual([1, 2, 3])
  })

  it('converts functions to empty array', () => {
    expect(anyToArray(() => {})).toEqual([])
    expect(anyToArray(async () => {})).toEqual([])
    expect(anyToArray(function() {})).toEqual([])
    expect(anyToArray(async function() {})).toEqual([])
    expect(anyToArray(function*() {})).toEqual([])
  })

  it('converts RegExp to empty array', () => {
    expect(anyToArray(/abc/)).toEqual([])
  })

  it("converts iterator to array of the iterator's values", () => {
    const array = ['a', 'b', 'c']
    const iterator = array[Symbol.iterator]()
    expect(anyToArray(iterator)).toEqual(['a', 'b', 'c'])
  })

  it("converts generator to array of the generator's values", () => {
    const generator = (function*() {
      yield 'a'
      yield 'b'
      yield 'c'
    })()
    expect(anyToArray(generator)).toEqual(['a', 'b', 'c'])
  })

  it('converts a Map to an Array', () => {
    expect(anyToArray(new Map([['a', 1]]))).toEqual([['a', 1]])
  })

  it('converts a Set to an Array', () => {
    expect(anyToArray(new Set(['a', 'b', 'c']))).toEqual(['a', 'b', 'c'])
  })

  it('converts a String to an Array', () => {
    expect(anyToArray('abc')).toEqual(['a', 'b', 'c'])
  })

  it('converts empty string to empty array', () => {
    expect(anyToArray('')).toEqual([])
  })
})
