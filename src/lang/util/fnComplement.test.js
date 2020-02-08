import Boolean from '../types/Boolean'
import String from '../types/String'
import definitionToFn from './definitionToFn'
import fnComplement from './fnComplement'
import fnGetMeta from './fnGetMeta'

describe('fnCurr', () => {
  test('complemented function should be a new Fn', () => {
    const fn = definitionToFn((arg) => arg)
    const complementedFn = fnComplement(fn)
    expect(complementedFn).not.toBe(fn)
    expect(fn('foo')).toBe('foo')
    expect(complementedFn('foo')).toBe(false)
  })

  test('complement basic Fn', () => {
    const fn = fnComplement(definitionToFn((arg) => arg))
    expect(fn(true)).toBe(false)
    expect(fn(false)).toBe(true)
  })

  test('if already complemented, should return inverse of original complement', () => {
    const fn = fnComplement(fnComplement(definitionToFn((arg) => arg)))
    expect(fn(true)).toBe(true)
    expect(fn(false)).toBe(false)
    expect(fn({})).toBe(true)
  })

  test('changes the return type to Boolean', () => {
    const fn = fnComplement(
      definitionToFn(() => 'foo'),
      [() => String]
    )
    expect(fnGetMeta(fn).returns).toBe(Boolean)
    expect(fn()).toBe(false)
  })
})
