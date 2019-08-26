import _ from './_'
import curry from './curry'

describe('_', () => {
  test('acts as a functional placeholder in a curried function', () => {
    const fn = curry(jest.fn((foo, bar) => [foo, bar]))
    const placeFn = fn(_, 'bar')
    expect(placeFn).toBeInstanceOf(Function)
    const result = placeFn('foo')
    expect(result).toEqual(['foo', 'bar'])
  })
})
