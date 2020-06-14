import { Key } from './js'
import createKey from './createKey'

describe('createKey', () => {
  test('creates an Key', () => {
    const index = createKey('foo')
    expect(index).toBeInstanceOf(Key)
    expect(index.valueOf()).toBe('foo')
  })
})
