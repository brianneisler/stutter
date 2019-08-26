import { ITERATOR_END, ITERATOR_START } from '../constants'
import objectToIterator from './objectToIterator'

describe('objectToIterator', () => {
  test('creates an iterator for an object', () => {
    expect(objectToIterator({})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the objects properties and not the array values only
  test('creates an object iterator for an array', () => {
    expect(objectToIterator([])).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the regexp's object properties
  test('creates an object iterator for a regexp', () => {
    expect(objectToIterator(/abc/)).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the functions's object properties
  test('creates an object iterator for functions', () => {
    expect(objectToIterator(async () => {})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(() => {})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(function() {})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(async function() {})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(function*() {})).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the generator's object properties
  test('creates an object iterator for generators', () => {
    expect(objectToIterator((function*() {})())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the native object's properties
  test('creates an iterator for native objects', () => {
    expect(objectToIterator(new ArrayBuffer(2))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Boolean(false))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Boolean(true))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Date())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Error())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Map())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Number(1))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Promise(() => {}))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new Set())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new String('abc'))).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new WeakMap())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
    expect(objectToIterator(new WeakSet())).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  // TODO BRN: For the following special values we need to add tests that ensure the iterator iterates over the length as a property
  test('creates an iterator for an object with length', () => {
    expect(objectToIterator({ length: 0 })).toEqual({
      next: expect.any(Function),
      previous: expect.any(Function),
      getKey: expect.any(Function)
    })
  })

  test('next() returns done for empty object', () => {
    const iterator = objectToIterator({})
    expect(iterator.next()).toEqual({
      done: true,
      prev: undefined
    })
  })

  test('previous() returns done for empty object', () => {
    const iterator = objectToIterator({})
    expect(iterator.previous()).toEqual({
      done: true,
      prev: undefined
    })
  })

  test('getKey should match returned key', () => {
    const symBan = Symbol('ban')
    const iterator = objectToIterator({
      foo: 'bar',
      bim: 'bop',
      [symBan]: 'ana'
    })
    let next = { done: false }

    expect(iterator.getKey()).toBe(undefined)

    while (!next.done) {
      next = iterator.next()
      if (!next.done) {
        expect(iterator.getKey()).toBe(next.key)
        expect(next.kdx).toBe(next.key)
      }
    }

    expect(iterator.getKey()).toBe(symBan)
  })

  test('creates an iterator for the object', () => {
    const symBan = Symbol('ban')
    const iterator = objectToIterator({
      foo: 'bar',
      bim: 'bop',
      [symBan]: 'ana'
    })
    let next = { done: false }
    const accum = []
    while (!next.done) {
      next = iterator.next()
      accum.push(next)
    }
    expect(accum).toEqual([
      {
        value: 'bar',
        key: 'foo',
        kdx: 'foo',
        prev: undefined,
        done: false
      },
      {
        value: 'bop',
        key: 'bim',
        kdx: 'bim',
        prev: {
          value: 'bar',
          key: 'foo',
          kdx: 'foo',
          done: false
        },
        done: false
      },
      {
        value: 'ana',
        key: symBan,
        kdx: symBan,
        prev: {
          value: 'bop',
          key: 'bim',
          kdx: 'bim',
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'ana',
          key: symBan,
          kdx: symBan,
          done: false
        },
        done: true
      }
    ])
  })

  test('creates an iterator for the object that starts at the ITERATOR_START', () => {
    const symBan = Symbol('ban')
    const iterator = objectToIterator(
      {
        foo: 'bar',
        bim: 'bop',
        [symBan]: 'ana'
      },
      ITERATOR_START
    )
    let previous = { done: false }
    const accum = []
    while (!previous.done) {
      previous = iterator.next()
      accum.push(previous)
    }
    expect(accum).toEqual([
      {
        value: 'bar',
        key: 'foo',
        kdx: 'foo',
        prev: undefined,
        done: false
      },
      {
        value: 'bop',
        key: 'bim',
        kdx: 'bim',
        prev: {
          value: 'bar',
          key: 'foo',
          kdx: 'foo',
          done: false
        },
        done: false
      },
      {
        value: 'ana',
        key: symBan,
        kdx: symBan,
        prev: {
          value: 'bop',
          key: 'bim',
          kdx: 'bim',
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'ana',
          key: symBan,
          kdx: symBan,
          done: false
        },
        done: true
      }
    ])
  })

  test('creates an iterator for the object that starts at the ITERATOR_END', () => {
    const symBan = Symbol('ban')
    const iterator = objectToIterator(
      {
        foo: 'bar',
        bim: 'bop',
        [symBan]: 'ana'
      },
      ITERATOR_END
    )
    let previous = { done: false }
    const accum = []
    while (!previous.done) {
      previous = iterator.previous()
      accum.push(previous)
    }
    expect(accum).toEqual([
      {
        value: 'ana',
        key: symBan,
        kdx: symBan,
        prev: undefined,
        done: false
      },
      {
        value: 'bop',
        key: 'bim',
        kdx: 'bim',
        prev: {
          value: 'ana',
          key: symBan,
          kdx: symBan,
          done: false
        },
        done: false
      },
      {
        value: 'bar',
        key: 'foo',
        kdx: 'foo',
        prev: {
          value: 'bop',
          key: 'bim',
          kdx: 'bim',
          done: false
        },
        done: false
      },
      {
        prev: {
          value: 'bar',
          key: 'foo',
          kdx: 'foo',
          done: false
        },
        done: true
      }
    ])
  })

  test('calling next and then previous results in iterating the same value twice', () => {
    const iterator = objectToIterator({
      foo: 'bar',
      bim: 'bop'
    })
    expect(iterator.next()).toEqual({
      value: 'bar',
      key: 'foo',
      kdx: 'foo',
      prev: undefined,
      done: false
    })
    expect(iterator.previous()).toEqual({
      value: 'bar',
      key: 'foo',
      kdx: 'foo',
      prev: {
        value: 'bop',
        key: 'bim',
        kdx: 'bim',
        done: false
      },
      done: false
    })
  })
})
