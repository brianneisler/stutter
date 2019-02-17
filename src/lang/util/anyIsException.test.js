import { values } from '../../../../tests'
import Exception from './js/Exception'
import Expected from './js/Expected'
import anyIsException from './anyIsException'
import arrayDifference from './arrayDifference'

describe('anyIsException', () => {
  test('returns true for an Exception', () => {
    const source = function() {}
    const target = {
      type: 'Argument',
      index: 0,
      value: 'test'
    }
    const expected = new Expected({
      expectation: 'foo',
      data: {}
    })
    expect(anyIsException(new Exception(source, target, expected))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsException).toHaveReturnedFalsyForValues(arrayDifference(values()))
  })
})
