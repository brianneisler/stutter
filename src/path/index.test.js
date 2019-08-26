describe('path index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      findPath: expect.any(Function)
    })
  })
})
