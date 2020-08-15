import { ImmutableList } from '../classes'
import createImmutableList from './createImmutableList'

describe('createImmutableList', () => {
  test('creates an ImmutableList', () => {
    const result = createImmutableList()
    expect(result).toBeInstanceOf(ImmutableList)
  })
})
