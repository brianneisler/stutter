import { Property } from '../classes'
import createProperty from './createProperty'

describe('createProperty', () => {
  test('creates an Property', () => {
    const index = createProperty('foo')
    expect(index).toBeInstanceOf(Property)
    expect(index.valueOf()).toBe('foo')
  })
})
