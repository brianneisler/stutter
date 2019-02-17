describe('string index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      asciiSize: expect.any(Function),
      asciiToArray: expect.any(Function),
      camelCase: expect.any(Function),
      capitalize: expect.any(Function),
      charCount: expect.any(Function),
      createCaseFirst: expect.any(Function),
      createPadding: expect.any(Function),
      hasUnicode: expect.any(Function),
      lowerCase: expect.any(Function),
      padStart: expect.any(Function),
      repeat: expect.any(Function),
      split: expect.any(Function),
      splitMapJoin: expect.any(Function),
      stringSize: expect.any(Function),
      stringToArray: expect.any(Function),
      toLower: expect.any(Function),
      toUpper: expect.any(Function),
      trim: expect.any(Function),
      unicodeSize: expect.any(Function),
      unicodeToArray: expect.any(Function),
      unicodeWords: expect.any(Function),
      upperFirst: expect.any(Function),
      words: expect.any(Function)
    })
  })
})
