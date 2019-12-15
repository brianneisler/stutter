import first from './first'
import head from './head'

describe('first', () => {
  test('first is alias of head', () => {
    expect(first).toBe(head)
  })
})
