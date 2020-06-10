import './Map'
import { Keyed } from '../protocols'
import { Map } from '../util/js'
import { anySatisfies } from '../util'

describe('Map', () => {
  test('Map instance satifies Keyed protocol', () => {
    expect(anySatisfies(new Map(), Keyed)).toBe(true)
  })
})
