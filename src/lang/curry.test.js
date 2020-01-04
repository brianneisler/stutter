/* eslint-disable id-length */
import curry from './curry'

describe('curry', () => {
  test('curries a standard function', () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d

    const curriedAddFourNumbers = curry(addFourNumbers)
    const f = curriedAddFourNumbers(1, 2)
    expect(f).toBeInstanceOf(Function)
    const g = f(3)
    expect(g).toBeInstanceOf(Function)
    expect(g(4)).toBe(10)
  })
})
