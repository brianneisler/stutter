describe('fetch index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      fetch: expect.any(Function)
    })
  })
})
