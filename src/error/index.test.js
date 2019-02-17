describe('error index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      createException: expect.any(Function),
      error: expect.any(Function),
      generateStackTrace: expect.any(Function),
      throwable: expect.any(Function)
    })
  })
})
