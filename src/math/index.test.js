describe('math index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      random: expect.any(Function),
      randomInt: expect.any(Function)
    })
  })
})
