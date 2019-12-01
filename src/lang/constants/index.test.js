describe('constants index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      DEBURRED_LETTERS: expect.any(Object),
      DEFAULT_NAMESPACE_NAME: expect.any(String),
      FUNCTIONAL_PLACEHOLDER: expect.any(Object),
      FUNCTION_IDENTITY: expect.any(Function),
      INFINITY: expect.any(Number),
      ITERATOR_END: expect.any(String),
      ITERATOR_START: expect.any(String),
      MAX_SAFE_INTEGER: expect.any(Number),
      NUMBER_MAX_VALUE: expect.any(Number),
      REGEX_COMBO_MARK: expect.any(RegExp),
      REGEX_DEEP_PATH: expect.any(RegExp),
      REGEX_LATIN: expect.any(RegExp),
      REGEX_PLAIN_PROP: expect.any(RegExp),
      REGEX_STRING_ASCII_RANGE: expect.any(String),
      REGEX_STRING_COMBO_HALF_MARKS_RANGE: expect.any(String),
      REGEX_STRING_COMBO_MARKS_RANGE: expect.any(String),
      REGEX_STRING_COMBO_RANGE: expect.any(String),
      REGEX_STRING_COMBO_SYMBOLS_RANGE: expect.any(String),
      REGEX_STRING_SURROGATES_RANGE: expect.any(String),
      REGEX_STRING_UTF_ZERO_WIDTH_JOINER: expect.any(String),
      REGEX_STRING_VARIATION_SELECTORS_RANGE: expect.any(String),
      REGEX_UINT: expect.any(RegExp),
      REGEX_UNICODE: expect.any(RegExp),
      SYMBOL_FN: expect.anything(),
      SYMBOL_ITERATOR: expect.anything(),
      SYMBOL_META: expect.anything(),
      SYMBOL_OP: expect.anything(),
      SYMBOL_TO_STRING_TAG: expect.anything()
    })
  })
})
