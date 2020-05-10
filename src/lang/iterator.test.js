import { ITERATOR } from './constants/Symbol'
import arrayLikeToIterator from './util/arrayLikeToIterator'
import iterator from './iterator'
import objectToIterator from './util/objectToIterator'

describe('iterator', () => {
  test('throws error for non objects', () => {
    const valuesToTest = [
      null,
      undefined,
      false,
      true,
      0,
      -1,
      1,
      NaN,
      Infinity,
      -Infinity
    ]
    valuesToTest.forEach((value) => {
      expect(() => {
        iterator(value)
      }).toThrowError(/^iterator method/)
    })
  })

  test('returns iterator for string that iterates through the characters', () => {
    const iter = iterator('abc')
    expect(iter.next()).toEqual({
      done: false,
      index: 0,
      kdx: 0,
      prev: undefined,
      value: 'a'
    })
    expect(iter.next()).toEqual({
      done: false,
      index: 1,
      kdx: 1,
      prev: {
        done: false,
        index: 0,
        kdx: 0,
        value: 'a'
      },
      value: 'b'
    })
    expect(iter.next()).toEqual({
      done: false,
      index: 2,
      kdx: 2,
      prev: {
        done: false,
        index: 1,
        kdx: 1,
        value: 'b'
      },
      value: 'c'
    })
    expect(iter.next()).toEqual({
      done: true,
      prev: {
        done: false,
        index: 2,
        kdx: 2,
        value: 'c'
      },
      value: undefined
    })
  })

  test('returns iterator for array that iterates through the values', () => {
    const iter = iterator(['abc', 'foo', 'bar'])
    expect(iter.next()).toEqual({
      done: false,
      index: 0,
      kdx: 0,
      prev: undefined,
      value: 'abc'
    })
    expect(iter.next()).toEqual({
      done: false,
      index: 1,
      kdx: 1,
      prev: {
        done: false,
        index: 0,
        kdx: 0,
        value: 'abc'
      },
      value: 'foo'
    })
    expect(iter.next()).toEqual({
      done: false,
      index: 2,
      kdx: 2,
      prev: {
        done: false,
        index: 1,
        kdx: 1,
        value: 'foo'
      },
      value: 'bar'
    })
    expect(iter.next()).toEqual({
      done: true,
      prev: {
        done: false,
        index: 2,
        kdx: 2,
        value: 'bar'
      },
      value: undefined
    })
  })

  test('returns iterator for object that iterates through the values and keys', () => {
    const iter = iterator({
      abc: 'def',
      bim: 'bop',
      foo: 'bar'
    })
    expect(iter.next()).toEqual({
      done: false,
      kdx: 'abc',
      key: 'abc',
      prev: undefined,
      value: 'def'
    })
    expect(iter.next()).toEqual({
      done: false,
      kdx: 'bim',
      key: 'bim',
      prev: {
        done: false,
        kdx: 'abc',
        key: 'abc',
        value: 'def'
      },
      value: 'bop'
    })
    expect(iter.next()).toEqual({
      done: false,
      kdx: 'foo',
      key: 'foo',
      prev: {
        done: false,
        kdx: 'bim',
        key: 'bim',
        value: 'bop'
      },
      value: 'bar'
    })
    expect(iter.next()).toEqual({
      done: true,
      prev: {
        done: false,
        kdx: 'foo',
        key: 'foo',
        value: 'bar'
      },
      value: undefined
    })
  })

  test('returns iterator from iterable value by calling iterator symbol', () => {
    const iter = {
      next: () => {}
    }
    const iterable = {
      [ITERATOR]: () => iter
    }
    const result = iterator(iterable)
    expect(result).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function)
    })
  })

  test('returns an iterator resolver if the value is already an Iterator', () => {
    const iter = {
      next: () => {}
    }
    const result = iterator(iter)
    expect(result).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function)
    })
  })

  test('returns the same iterator if the iterator is an IndexedIterator', () => {
    const iter = arrayLikeToIterator([])
    const result = iterator(iter)
    expect(result).toBe(iter)
  })

  test('returns the same iterator if the iterator is a KeyedIterator', () => {
    const iter = objectToIterator({})
    const result = iterator(iter)
    expect(result).toBe(iter)
  })
})
