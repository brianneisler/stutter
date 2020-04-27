import to from './to'

describe('to', () => {
  it('converts falsey values to an empty array', () => {
    expect(toArray(undefined)).toEqual([])
    expect(toArray(null)).toEqual([])
    expect(toArray(false)).toEqual([])
    expect(toArray('')).toEqual([])
  })

  it('converts a Map to an Array', () => {
    expect(toArray(new Map([['a', 1]]))).toEqual([['a', 1]])
  })

  it('converts a String to an Array', () => {
    expect(toArray('abc')).toEqual(['a', 'b', 'c'])
  })
})
