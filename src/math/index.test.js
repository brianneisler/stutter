describe('math index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      randomInt: expect.any(Function)
    })
  })
})
