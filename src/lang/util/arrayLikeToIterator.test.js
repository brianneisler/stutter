import { ITERATOR_END, ITERATOR_START } from '../constants'
import arrayLikeToIterator from './arrayLikeToIterator'

describe('arrayLikeToIterator', () => {
  test('creates an iterator for an array', () => {
    expect(arrayLikeToIterator([])).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getIndex: expect.any(Function)
    })
  })

  test('creates an iterator for a string', () => {
    expect(arrayLikeToIterator('abc')).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getIndex: expect.any(Function)
    })
  })

  test('creates an iterator for an object with length', () => {
    expect(arrayLikeToIterator({ length: 0 })).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getIndex: expect.any(Function)
    })
  })

  test('next() returns done for empty array', () => {
    const iterator = arrayLikeToIterator([])
    expect(iterator.next()).toEqual({
      done: true,
      prev: undefined
    })
  })

  test('previous() returns done for empty array', () => {
    const iterator = arrayLikeToIterator([])
    expect(iterator.previous()).toEqual({
      done: true,
      prev: undefined
    })
  })

  test('getIndex should match returned index', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'])
    let next = { done: false }

    expect(iterator.getIndex()).toBe(undefined)

    while (!next.done) {
      next = iterator.next()
      if (!next.done) {
        expect(iterator.getIndex()).toBe(next.index)
        expect(next.kdx).toBe(next.index)
      }
    }

    expect(iterator.getIndex()).toBe(1)
  })

  test('creates an iterator at the starting point of the array', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'])
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        value: 'foo',
        index: 0,
        kdx: 0,
        prev: undefined,
        done: false
      },
      {
        value: 'bar',
        index: 1,
        kdx: 1,
        prev: {
          value: 'foo',
          index: 0,
          kdx: 0,
          done: false
        },
        done: false
      },
      {
        done: true,
        prev: {
          value: 'bar',
          index: 1,
          kdx: 1,
          done: false
        }
      }
    ])
  })

  test('starts at the given index', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], 1)
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        value: 'bar',
        index: 1,
        kdx: 1,
        prev: {
          value: 'foo',
          index: 0,
          kdx: 0,
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'bar',
          index: 1,
          kdx: 1,
          done: false
        },
        done: true
      }
    ])
  })

  test('If index is greater than length by 1 than iterator should perform no iterations and return the final value in prev', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], 3)
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        prev: { done: false, index: 1, kdx: 1, value: 'bar' },
        done: true
      }
    ])
  })

  test('If index is greater than length by more than 1 than iterator should perform no iterations and return the final value in prev', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], 4)
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        prev: { done: false, index: 1, kdx: 1, value: 'bar' },
        done: true
      }
    ])
  })

  test('If index is negative than should start from length + index', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], -1)
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        value: 'bar',
        index: 1,
        kdx: 1,
        prev: {
          value: 'foo',
          index: 0,
          kdx: 0,
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'bar',
          index: 1,
          kdx: 1,
          done: false
        },
        done: true
      }
    ])
  })

  test('START starts the iterator at the 0 index', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], ITERATOR_START)
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        value: 'foo',
        index: 0,
        kdx: 0,
        prev: undefined,
        done: false
      },
      {
        value: 'bar',
        index: 1,
        kdx: 1,
        prev: {
          value: 'foo',
          index: 0,
          kdx: 0,
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'bar',
          index: 1,
          kdx: 1,
          done: false
        },
        done: true
      }
    ])
  })

  test('calling next and then previous results in iterating the same value twice', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'])
    expect(iterator.next()).toEqual({
      value: 'foo',
      index: 0,
      kdx: 0,
      prev: undefined,
      done: false
    })
    expect(iterator.previous()).toEqual({
      value: 'foo',
      index: 0,
      kdx: 0,
      prev: {
        value: 'bar',
        index: 1,
        kdx: 1,
        done: false
      },
      done: false
    })
  })

  test('END starts the iterator at the last index', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], ITERATOR_END)
    let previous = { done: false }
    const accum = []
    while (!previous.done) {
      previous = iterator.previous()
      accum.push(previous)
    }
    expect(accum).toEqual([
      {
        value: 'bar',
        index: 1,
        kdx: 1,
        prev: undefined,
        done: false
      },
      {
        value: 'foo',
        index: 0,
        kdx: 0,
        prev: {
          value: 'bar',
          index: 1,
          kdx: 1,
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'foo',
          index: 0,
          kdx: 0,
          done: false
        },
        done: true
      }
    ])
  })

  test('calling next multiple times when the iterator is at the end returns the same done result', () => {
    const iterator = arrayLikeToIterator(['foo', 'bar'], ITERATOR_END)
    expect(iterator.next()).toEqual({
      prev: {
        value: 'bar',
        index: 1,
        kdx: 1,
        done: false
      },
      done: true
    })
    expect(iterator.next()).toEqual({
      prev: {
        value: 'bar',
        index: 1,
        kdx: 1,
        done: false
      },
      done: true
    })
  })
})
