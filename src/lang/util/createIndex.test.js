import { Index } from '../classes'
import createIndex from './createIndex'

describe('createIndex', () => {
  test('creates an Index', () => {
    const index = createIndex(0)
    expect(index).toBeInstanceOf(Index)
    expect(index.valueOf()).toBe(0)
  })
})
