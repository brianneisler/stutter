describe('buffer index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      copyBufferToUint8Array: expect.any(Function)
    })
  })
})
