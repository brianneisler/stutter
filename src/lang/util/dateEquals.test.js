import { dates, values } from '../../test'
import { without } from 'ramda'
import dateEquals from './dateEquals'

describe('dateEquals', () => {
  test('returns true for different Date instances of same value', () => {
    expect(
      dateEquals(
        new Date('December 25, 2020 00:00:00'),
        new Date('December 25, 2020 00:00:00')
      )
    ).toBe(true)
  })

  test('returns false for different Date instances of different value', () => {
    expect(
      dateEquals(
        new Date('December 24, 2020 00:00:00'),
        new Date('December 25, 2020 00:00:00')
      )
    ).toBe(false)
  })

  test('returns false for all other values', () => {
    const date = new Date('December 24, 2020 00:00:00')
    expect((value) => dateEquals(date, value)).toHaveReturnedFalsyForValues(
      without(dates(), values())
    )
  })
})
