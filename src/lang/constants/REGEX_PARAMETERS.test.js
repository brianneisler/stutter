import REGEX_PARAMETERS from './REGEX_PARAMETERS'

describe('REGEX_PARAMETERS', () => {
  test('parses arrow function with no params', () => {
    expect(Array.from('() => {}'.match(REGEX_PARAMETERS))).toEqual([
      '() => {}',
      undefined,
      '',
      undefined
    ])
  })

  test('parses async arrow function with no params', () => {
    expect(Array.from('async () => {}'.match(REGEX_PARAMETERS))).toEqual([
      'async () => {}',
      undefined,
      '',
      undefined
    ])
  })

  test('parses anonymous function with no params', () => {
    expect(Array.from('function() {}'.match(REGEX_PARAMETERS))).toEqual([
      'function() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses anonymous async function with no params', () => {
    expect(Array.from('async function() {}'.match(REGEX_PARAMETERS))).toEqual([
      'async function() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses anonymous generator function with no params', () => {
    expect(Array.from('function*() {}'.match(REGEX_PARAMETERS))).toEqual([
      'function*() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses named function with no params', () => {
    expect(Array.from('function foo_BAR_012$() {}'.match(REGEX_PARAMETERS))).toEqual([
      'function foo_BAR_012$() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses named async function with no params', () => {
    expect(Array.from('async function foo_BAR_012$() {}'.match(REGEX_PARAMETERS))).toEqual([
      'async function foo_BAR_012$() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses named generator function with no params', () => {
    expect(Array.from('function* foo_BAR_012$() {}'.match(REGEX_PARAMETERS))).toEqual([
      'function* foo_BAR_012$() {}',
      '',
      undefined,
      undefined
    ])
  })

  test('parses arrow function with one param and no parenthesis', () => {
    expect(Array.from('arg => {}'.match(REGEX_PARAMETERS))).toEqual([
      'arg => {}',
      undefined,
      undefined,
      'arg'
    ])
  })

  test('parses arrow function with one param and parenthesis', () => {
    expect(Array.from('(arg) => {}'.match(REGEX_PARAMETERS))).toEqual([
      '(arg) => {}',
      undefined,
      'arg',
      undefined
    ])
  })

  test('parses arrow function with one param that had a default', () => {
    expect(Array.from("(arg = 'foo') => {}".match(REGEX_PARAMETERS))).toEqual([
      "(arg = 'foo') => {}",
      undefined,
      "arg = 'foo'",
      undefined
    ])
  })

  test('parses arrow function with two parameters', () => {
    expect(Array.from('(arg, arg2) => {}'.match(REGEX_PARAMETERS))).toEqual([
      '(arg, arg2) => {}',
      undefined,
      'arg, arg2',
      undefined
    ])
  })

  test('parses arrow function with two parameters and last parameter has a default', () => {
    expect(Array.from("(arg, arg2 = 'foo') => {}".match(REGEX_PARAMETERS))).toEqual([
      "(arg, arg2 = 'foo') => {}",
      undefined,
      "arg, arg2 = 'foo'",
      undefined
    ])
  })
})
