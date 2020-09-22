import './Map'
import { Map } from '../classes'
import { Keyed } from '../protocols'
import { anySatisfies } from '../util'

describe('Map', () => {
  test('Map instance satifies Keyed protocol', () => {
    expect(anySatisfies(new Map(), Keyed)).toBe(true)
  })
})
