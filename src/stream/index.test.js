describe('stream index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      bufferToStream: expect.any(Function),
      isReadableStream: expect.any(Function),
      Readable: expect.any(Function),
      ReadableBufferStream: expect.any(Function),
      readableStream: expect.any(Function),
      stringToStream: expect.any(Function)
    })
  })
})
