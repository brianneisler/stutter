import anyToArguments from './anyToArguments'

describe('anyToArguments', () => {
  it('converts nil values to an empty Arguments', () => {
    expect(anyToArguments(undefined)).toEqual(expect.objectContaining({}))
    expect(anyToArguments(null)).toEqual(expect.objectContaining({}))
  })

  it('returns non ArrayLike values in an Arguments', () => {
    expect(anyToArguments(false)).toEqual(
      expect.objectContaining({
        0: false
      })
    )
    expect(anyToArguments(true)).toEqual(
      expect.objectContaining({
        0: true
      })
    )
    expect(anyToArguments(0)).toEqual(
      expect.objectContaining({
        0: 0
      })
    )
    expect(anyToArguments(-1)).toEqual(
      expect.objectContaining({
        0: -1
      })
    )
    expect(anyToArguments(1)).toEqual(
      expect.objectContaining({
        0: 1
      })
    )
    expect(anyToArguments(NaN)).toEqual(
      expect.objectContaining({
        0: NaN
      })
    )
    expect(anyToArguments(Infinity)).toEqual(
      expect.objectContaining({
        0: Infinity
      })
    )
    expect(anyToArguments(-Infinity)).toEqual(
      expect.objectContaining({
        0: -Infinity
      })
    )
  })

  it('preserves existing Arguments', () => {
    const args = function() {
      return arguments
    }.apply(null, ['a', 'b', 'c'])
    const result = anyToArguments(args)
    expect(result).toBe(args)
    expect(result).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it('converts Array to Arguments', () => {
    const array = ['a', 'b', 'c']
    expect(anyToArguments(array)).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it('converts functions to empty Arguments', () => {
    expect(anyToArguments(async () => {})).toEqual(expect.objectContaining({}))
    expect(anyToArguments(() => {})).toEqual(expect.objectContaining({}))
    expect(anyToArguments(function() {})).toEqual(expect.objectContaining({}))
    expect(anyToArguments(async function() {})).toEqual(expect.objectContaining({}))
    expect(anyToArguments(function*() {})).toEqual(expect.objectContaining({}))
  })

  it('converts RegExp to empty Arguments', () => {
    expect(anyToArguments(/abc/)).toEqual(expect.objectContaining({}))
  })

  it("converts iterator to Arguments of the iterator's values", () => {
    const array = ['a', 'b', 'c']
    const iterator = array[Symbol.iterator]()
    expect(anyToArguments(iterator)).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it("converts generator to Arguments of the generator's values", () => {
    const generator = (function*() {
      yield 'a'
      yield 'b'
      yield 'c'
    })()
    expect(anyToArguments(generator)).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it('converts a Map to an Arguments', () => {
    expect(anyToArguments(new Map([['a', 1]]))).toEqual(
      expect.objectContaining({
        0: ['a', 1]
      })
    )
  })

  it('converts a Set to an Arguments', () => {
    expect(anyToArguments(new Set(['a', 'b', 'c']))).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it('converts a String to an Array', () => {
    expect(anyToArguments('abc')).toEqual(
      expect.objectContaining({
        0: 'a',
        1: 'b',
        2: 'c'
      })
    )
  })

  it('converts empty string to empty array', () => {
    expect(anyToArguments('')).toEqual(expect.objectContaining({}))
  })
})
