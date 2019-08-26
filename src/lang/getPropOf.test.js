import getPropOf from './getPropOf'

describe('getPropOf', () => {
  test('get prop of value using a single key', () => {
    const value = {
      foo: 'bar'
    }
    expect(getPropOf(value, 'foo')).toBe('bar')
    expect(getPropOf(value, 'bar')).toBe(undefined)
  })

  test('get prop of nil values returns undefined', () => {
    expect(getPropOf(undefined, 'foo')).toBe(undefined)
    expect(getPropOf(null, 'foo')).toBe(undefined)
  })

  test('get undefined props of value return the value', () => {
    const value = {}
    expect(getPropOf(value, undefined)).toBe(value)
    expect(getPropOf(value, null)).toBe(undefined)
    expect(getPropOf(null, undefined)).toBe(null)
    expect(getPropOf(null, null)).toBe(undefined)
  })

  test('does not convert props to paths', () => {
    const value = {
      foo: {
        bar: 'foobar'
      }
    }
    expect(getPropOf(value, 'foo.bar')).toBe(undefined)
  })

  test('works with props that have dots', () => {
    const value = {
      'foo.bar': 'foobar'
    }
    expect(getPropOf(value, 'foo.bar')).toBe('foobar')
  })

  test('get prop of Map', () => {
    const value = new Map([['foo', 'bar']])
    expect(getPropOf(value, 'foo')).toBe('bar')
    expect(getPropOf(value, 'bar')).toBe(undefined)
  })

  test('executes getter if prop is function', () => {
    const value = {
      foo: 'bar'
    }
    expect(getPropOf(value, (val) => val.foo)).toBe('bar')
    expect(getPropOf(value, (val) => val.bar)).toBe(undefined)
  })

  test('curries the getPropOf method', () => {
    const value = {
      foo: 'bar'
    }
    const getPropOfValue = getPropOf(value)
    expect(getPropOfValue('foo')).toBe('bar')
  })

  test('dispatches to the getPropOf method of the last argument', () => {
    const prop = {
      getPropOf(value) {
        return value['foo']
      }
    }
    const value = {
      foo: 'bar'
    }
    expect(getPropOf(value, prop)).toBe('bar')
  })

  test('dispatches to the getPropOf method of the last argument when curried', () => {
    const prop = {
      getPropOf: jest.fn(function(value) {
        return value['foo']
      })
    }
    const value = {
      foo: 'bar'
    }
    const getPropOfValue = getPropOf(value)
    expect(getPropOfValue(prop)).toBe('bar')
    expect(prop.getPropOf).toHaveBeenCalledTimes(1)
    expect(prop.getPropOf).toHaveBeenCalledWith(value, prop)
  })
})
