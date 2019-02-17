import Protocol from './js/Protocol'
import SYMBOL_PROTOCOLS from '../constants/SYMBOL_PROTOCOLS'
import anySatisfies from './anySatisfies'

describe('anySatisfies', () => {
  it('returns true for a value that has the given protocol', () => {
    const Fooed = new Protocol('Fooed', 'A protocol for foo', {})
    const instance = {
      [SYMBOL_PROTOCOLS]: {
        [Fooed]: {}
      }
    }
    expect(anySatisfies(instance, Fooed)).toBe(true)
  })

  test('returns false for all other values', () => {
    const Fooed = new Protocol('Fooed', 'A protocol for foo', {})
    expect(anySatisfies(undefined, Fooed)).toBe(false)
    expect(anySatisfies(null, Fooed)).toBe(false)
    expect(anySatisfies('', Fooed)).toBe(false)
    expect(anySatisfies('abc', Fooed)).toBe(false)
    expect(anySatisfies(false, Fooed)).toBe(false)
    expect(anySatisfies(true, Fooed)).toBe(false)
    expect(anySatisfies(0, Fooed)).toBe(false)
    expect(anySatisfies(-1, Fooed)).toBe(false)
    expect(anySatisfies(1, Fooed)).toBe(false)
    expect(anySatisfies(NaN, Fooed)).toBe(false)
    expect(anySatisfies(Infinity, Fooed)).toBe(false)
    expect(anySatisfies(-Infinity, Fooed)).toBe(false)
    expect(anySatisfies({}, Fooed)).toBe(false)
    expect(anySatisfies([], Fooed)).toBe(false)
    expect(anySatisfies(/abc/, Fooed)).toBe(false)
    expect(anySatisfies(new RegExp('abc'), Fooed)).toBe(false)
    expect(anySatisfies(async () => {}, Fooed)).toBe(false)
    expect(anySatisfies(() => {}, Fooed)).toBe(false)
    expect(anySatisfies(function() {}, Fooed)).toBe(false)
    expect(anySatisfies(function*() {}, Fooed)).toBe(false)
    expect(anySatisfies((function*() {})(), Fooed)).toBe(false)
    expect(anySatisfies(new Array(0), Fooed)).toBe(false)
    expect(anySatisfies(new ArrayBuffer(2), Fooed)).toBe(false)
    expect(anySatisfies(new Boolean(false), Fooed)).toBe(false)
    expect(anySatisfies(new Boolean(true), Fooed)).toBe(false)
    expect(anySatisfies(new Date(), Fooed)).toBe(false)
    expect(anySatisfies(new Error(), Fooed)).toBe(false)
    expect(anySatisfies(new Number(1), Fooed)).toBe(false)
    expect(anySatisfies(new Promise(() => {}), Fooed)).toBe(false)
    expect(anySatisfies(new Proxy({}, {}), Fooed)).toBe(false)
    expect(anySatisfies(new Set(), Fooed)).toBe(false)
    expect(anySatisfies(new String('abc'), Fooed)).toBe(false)
    expect(anySatisfies(Symbol('abc'), Fooed)).toBe(false)
    expect(anySatisfies(new WeakMap(), Fooed)).toBe(false)
  })
})
