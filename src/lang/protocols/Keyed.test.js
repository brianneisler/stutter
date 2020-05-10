import '../types/Map'
import { anySatisfies } from '../util'
import Keyed from './Keyed'

describe('Keyed', () => {
  test('Map satifies Keyed protocol', () => {
    expect(anySatisfies(new Map(), Keyed)).toBe(true)
  })
})
