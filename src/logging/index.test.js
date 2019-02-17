describe('logging index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      log: expect.any(Function)
    })
  })
})
