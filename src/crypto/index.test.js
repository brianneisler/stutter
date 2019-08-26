describe('crypto index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      hashStream: expect.any(Function),
      hashString: expect.any(Function)
    })
  })
})
