/* eslint-disable id-length */
import curry from './curry'

example('curry', () => {
  const addFourNumbers = (a, b, c, d) => a + b + c + d

  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)
  g(4)
  // => 10
})
