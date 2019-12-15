describe('stream index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      Readable: expect.any(Function),
      ReadableBufferStream: expect.any(Function),
      bufferToStream: expect.any(Function),
      isReadableStream: expect.any(Function),
      readableStream: expect.any(Function),
      stringToStream: expect.any(Function)
    })
  })
})
