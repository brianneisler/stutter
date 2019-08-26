describe('logic index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      and: expect.any(Function),
      isEmpty: expect.any(Function),
      not: expect.any(Function),
      or: expect.any(Function)
    })
  })
})
