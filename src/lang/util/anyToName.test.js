import anyToName from './anyToName'

describe('anyToName', () => {
  it('converts null to "null"', () => {
    expect(anyToName(null)).toBe('null')
  })

  it('converts undefined to "undefined"', () => {
    expect(anyToName(undefined)).toBe('undefined')
  })

  it('converts number to string representation', () => {
    expect(anyToName(1)).toBe('1')
    expect(anyToName(1.23)).toBe('1.23')
    expect(anyToName(0)).toBe('0')
    expect(anyToName(-1)).toBe('-1')
    expect(anyToName(-1.23)).toBe('-1.23')
    expect(anyToName(-0)).toBe('-0')
  })

  it('converts Infinity to string representation', () => {
    expect(anyToName(Infinity)).toBe('Infinity')
    expect(anyToName(-Infinity)).toBe('-Infinity')
  })

  it('delegates to the toName method if it exists on an Object', () => {
    const obj = {
      toName() {
        return 'foo'
      }
    }
    expect(anyToName(obj)).toBe('foo')
  })

  it("converts object with Symbol.for('@@meta') to name contained in meta symbol", () => {
    const obj = {
      [Symbol.for('@@meta')]: {
        name: 'foo'
      }
    }
    expect(anyToName(obj)).toBe('foo')
  })
})
