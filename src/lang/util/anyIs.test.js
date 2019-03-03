import Type from './js/Type'
import anyIs from './anyIs'

describe('anyIs', () => {
  test('identifies the given Type', () => {
    const NumberType = new Type({
      is: (any) => typeof any === 'number'
    })
    expect(anyIs(123, NumberType)).toBe(true)
    expect(anyIs('foo', NumberType)).toBe(false)
  })
})
