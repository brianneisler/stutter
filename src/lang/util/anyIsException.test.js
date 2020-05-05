import { values } from '../../../tests'
import Exception from './js/Exception'
import Expected from './js/Expected'
import anyIsException from './anyIsException'
import arrayDifference from './arrayDifference'

describe('anyIsException', () => {
  test('returns true for an Exception', () => {
    const source = function () {}
    const target = {
      index: 0,
      type: 'Argument',
      value: 'test'
    }
    const expected = new Expected({
      data: {},
      exceptionToError: () => {},
      expectation: 'foo'
    })
    expect(anyIsException(new Exception({ expected, source, target }))).toBe(true)
  })

  test('returns false for all other values', () => {
    expect(anyIsException).toHaveReturnedFalsyForValues(arrayDifference(values()))
  })
})
