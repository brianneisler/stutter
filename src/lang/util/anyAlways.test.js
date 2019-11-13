import anyAlways from './anyAlways'

describe('anyAlways', () => {
  test('returns a function that returns the given value', () => {
    const func = anyAlways('foo')
    expect(func()).toBe('foo')
  })
})
