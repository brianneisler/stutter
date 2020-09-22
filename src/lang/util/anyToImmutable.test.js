import ImmutableList from '../classes/ImmutableList'
import ImmutableMap from '../classes/ImmutableMap'

import anyToImmutable from './anyToImmutable'

describe('anyToImmutable', () => {
  it('converts an Object to an ImmutableMap', () => {
    expect(anyToImmutable({ foo: 'bar' })).toEqual(ImmutableMap({ foo: 'bar' }))
  })

  it('converts an Array to an ImmutableList', () => {
    expect(anyToImmutable({ foo: ['bar'] })).toEqual(
      ImmutableMap({ foo: ImmutableList(['bar']) })
    )
  })

  it('converts nested values', () => {
    expect(anyToImmutable(['bar'])).toEqual(ImmutableList(['bar']))
  })

  it('converts all primitives to themselves', () => {
    expect(anyToImmutable(undefined)).toBe(undefined)
    expect(anyToImmutable(null)).toBe(null)
    expect(anyToImmutable('')).toBe('')
    expect(anyToImmutable('abc')).toBe('abc')
    expect(anyToImmutable(false)).toBe(false)
    expect(anyToImmutable(true)).toBe(true)
    expect(anyToImmutable(0)).toBe(0)
    expect(anyToImmutable(-1)).toBe(-1)
    expect(anyToImmutable(1)).toBe(1)
    expect(anyToImmutable(NaN)).toBe(NaN)
    expect(anyToImmutable(Infinity)).toBe(Infinity)
    expect(anyToImmutable(-Infinity)).toBe(-Infinity)
  })
})
