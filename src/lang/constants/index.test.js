describe('constants index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      // TODO BRN: Convert all of these constants into a form like ErrorCode
      DEBURRED_LETTERS: expect.any(Object),
      DEFAULT_NAMESPACE_NAME: expect.any(String),
      ErrorCode: {
        NO_MATCH: expect.any(String)
      },
      FUNCTIONAL_PLACEHOLDER: expect.any(Object),
      Function: {
        IDENTITY: expect.any(Function)
      },
      Integer: {
        MAX_SAFE: expect.any(Number)
      },
      Iterator: {
        END: expect.any(String),
        START: expect.any(String)
      },
      Number: {
        INFINITY: expect.any(Number),
        MAX_VALUE: expect.any(Number)
      },
      Regex: {
        COMBO_MARK: expect.any(RegExp),
        DEEP_PATH: expect.any(RegExp),
        LATIN: expect.any(RegExp),
        PLAIN_PROP: expect.any(RegExp),
        STRING_ASCII_RANGE: expect.any(String),
        STRING_COMBO_HALF_MARKS_RANGE: expect.any(String),
        STRING_COMBO_MARKS_RANGE: expect.any(String),
        STRING_COMBO_RANGE: expect.any(String),
        STRING_COMBO_SYMBOLS_RANGE: expect.any(String),
        STRING_SURROGATES_RANGE: expect.any(String),
        STRING_UTF_ZERO_WIDTH_JOINER: expect.any(String),
        STRING_VARIATION_SELECTORS_RANGE: expect.any(String),
        UINT: expect.any(RegExp),
        UNICODE: expect.any(RegExp)
      },
      Symbol: {
        FN: expect.anything(),
        ITERATOR: expect.anything(),
        META: expect.anything(),
        TO_STRING_TAG: expect.anything()
      }
    })
  })
})
