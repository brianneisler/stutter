import symbolToString from './symbolToString'

describe('symbolToString', () => {
  test('converts a symbol to a string', () => {
    expect(symbolToString(Symbol('abc'))).toBe('Symbol(abc)')
    expect(symbolToString(Symbol.for('abc'))).toBe('Symbol(abc)')
  })
})
