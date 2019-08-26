import __ from './__'
import always from './always'

describe('always', () => {
  test('returns a function that returns the given value', () => {
    const result = always('foo')
    expect(result).toBeInstanceOf(Function)
    expect(result()).toBe('foo')
  })

  test('always returns the same value', () => {
    const result = always('foo')
    expect(result()).toBe('foo')
    expect(result('bar')).toBe('foo')
  })

  test('curries the method with placeholder', () => {
    const result = always(__)
    const foo = result('foo')
    expect(foo()).toBe('foo')
  })

  test('dispatches to the last argument', () => {
    const value = {
      always() {
        return function() {
          return 'foo'
        }
      }
    }
    const result = always(value)
    expect(result()).toBe('foo')
  })

  test('dispatches to the method of the last argument when curried', () => {
    const value = {
      always() {
        return function() {
          return 'foo'
        }
      }
    }
    const result = always(__)
    const foo = result(value)
    expect(foo()).toBe('foo')
  })
})
