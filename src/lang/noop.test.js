import noop from './noop'

describe('lang.noop', () => {
  test('returns null', () => {
    expect(noop()).toBe(null)
  })
})
