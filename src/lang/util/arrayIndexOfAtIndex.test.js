import anyIdenticalWithAny from './anyIdenticalWithAny'
import arrayIndexOfAtIndex from './arrayIndexOfAtIndex'

describe('arrayIndexOfAtIndex', () => {
  test('returns the index of a string in array starting from 0', () => {
    const array = ['a', 'b', 'c']
    expect(arrayIndexOfAtIndex(array, 'a', 0, () => {})).toBe(0)
  })

  test('returns the index of a boolean in array starting from 0', () => {
    const array = [null, true, false]
    expect(arrayIndexOfAtIndex(array, false, 0, () => {})).toBe(2)
  })

  test('returns the index of undefined in array starting from 0', () => {
    const array = [null, undefined, false]
    expect(arrayIndexOfAtIndex(array, undefined, 0, () => {})).toBe(1)
  })

  test('returns the index of null in array starting from 0', () => {
    const array = [null, undefined, false]
    expect(arrayIndexOfAtIndex(array, null, 0, () => {})).toBe(0)
  })

  test('returns the index of a number in array starting from 0', () => {
    const array = [0, 1, 2]
    expect(arrayIndexOfAtIndex(array, 1, 0, () => {})).toBe(1)
  })

  test('returns the index of 0 in array starting from 0', () => {
    const array = [0, 1, 2]
    expect(arrayIndexOfAtIndex(array, 0, 0, () => {})).toBe(0)
  })

  test('returns -1 when trying to find 0 in array starting from 0 if no 0 can be found', () => {
    const array = ['a', 'b', 'c']
    expect(arrayIndexOfAtIndex(array, 0, 0, () => {})).toBe(-1)
  })

  test('returns the index of -0 in array starting from 0', () => {
    const array = [0, -0, 0]
    expect(arrayIndexOfAtIndex(array, -0, 0, () => {})).toBe(1)
  })

  test('returns the index of NaN in array starting from 0', () => {
    const array = ['a', NaN, 'c']
    expect(arrayIndexOfAtIndex(array, NaN, 0, () => {})).toBe(1)
  })

  test('returns -1 when trying to find NaN in array starting from 0 if no NaN can be found', () => {
    const array = ['a', 'b', 'c']
    expect(arrayIndexOfAtIndex(array, NaN, 0, () => {})).toBe(-1)
  })

  test('returns the index of an object by value in array starting from 0', () => {
    const object1 = { a: 1 }
    const object2 = { b: 2 }
    const object3 = { c: 3 }
    const array = [object1, object2, object3]
    expect(arrayIndexOfAtIndex(array, object3, 0, anyIdenticalWithAny)).toBe(2)
  })

  test('returns the index of an object by value in array starting from 0', () => {
    const object1 = { a: 1 }
    const object2 = { b: 2 }
    const object3 = { c: 3 }
    const array = [object1, object2, object3]
    expect(arrayIndexOfAtIndex(array, { d: 4 }, 0, anyIdenticalWithAny)).toBe(
      -1
    )
  })

  test('returns the index of an object by value in array starting from 0', () => {
    const object1 = { a: 1 }
    const object2 = { b: 2 }
    const object3 = { c: 3 }
    const array = [object1, object2, object3]
    expect(arrayIndexOfAtIndex(array, { d: 4 }, 0, anyIdenticalWithAny)).toBe(
      -1
    )
  })

  test('returns the index of an object by value when no indexOf is present', () => {
    const array = ['a', 'b', 'c']
    array.indexOf = null
    expect(arrayIndexOfAtIndex(array, 'c', 0, anyIdenticalWithAny)).toBe(2)
  })
})
