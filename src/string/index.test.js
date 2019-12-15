describe('string index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      camelCase: expect.any(Function),
      capitalize: expect.any(Function),
      charCount: expect.any(Function),
      createPadding: expect.any(Function),
      deburr: expect.any(Function),
      deburrLetter: expect.any(Function),
      lowerCase: expect.any(Function),
      padStart: expect.any(Function),
      repeat: expect.any(Function),
      split: expect.any(Function),
      splitMapJoin: expect.any(Function),
      toLowerCase: expect.any(Function),
      toUpperCase: expect.any(Function),
      words: expect.any(Function)
    })
  })
})
