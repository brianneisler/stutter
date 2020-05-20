import { PARAMETERS, STACKTRACE_LINE } from './Regex'

describe('Regex', () => {
  describe('PARAMETERS', () => {
    test('parses arrow function with no params', () => {
      expect(Array.from('() => {}'.match(PARAMETERS))).toEqual([
        '() => {}',
        undefined,
        '',
        undefined
      ])
    })

    test('parses async arrow function with no params', () => {
      expect(Array.from('async () => {}'.match(PARAMETERS))).toEqual([
        'async () => {}',
        undefined,
        '',
        undefined
      ])
    })

    test('parses anonymous function with no params', () => {
      expect(Array.from('function() {}'.match(PARAMETERS))).toEqual([
        'function() {}',
        '',
        undefined,
        undefined
      ])
    })

    test('parses anonymous async function with no params', () => {
      expect(Array.from('async function() {}'.match(PARAMETERS))).toEqual([
        'async function() {}',
        '',
        undefined,
        undefined
      ])
    })

    test('parses anonymous generator function with no params', () => {
      expect(Array.from('function*() {}'.match(PARAMETERS))).toEqual([
        'function*() {}',
        '',
        undefined,
        undefined
      ])
    })

    test('parses named function with no params', () => {
      expect(
        Array.from('function foo_BAR_012$() {}'.match(PARAMETERS))
      ).toEqual(['function foo_BAR_012$() {}', '', undefined, undefined])
    })

    test('parses named async function with no params', () => {
      expect(
        Array.from('async function foo_BAR_012$() {}'.match(PARAMETERS))
      ).toEqual(['async function foo_BAR_012$() {}', '', undefined, undefined])
    })

    test('parses named generator function with no params', () => {
      expect(
        Array.from('function* foo_BAR_012$() {}'.match(PARAMETERS))
      ).toEqual(['function* foo_BAR_012$() {}', '', undefined, undefined])
    })

    test('parses arrow function with one param and no parenthesis', () => {
      expect(Array.from('arg => {}'.match(PARAMETERS))).toEqual([
        'arg => {}',
        undefined,
        undefined,
        'arg'
      ])
    })

    test('parses arrow function with one param and parenthesis', () => {
      expect(Array.from('(arg) => {}'.match(PARAMETERS))).toEqual([
        '(arg) => {}',
        undefined,
        'arg',
        undefined
      ])
    })

    test('parses arrow function with one param that had a default', () => {
      expect(Array.from("(arg = 'foo') => {}".match(PARAMETERS))).toEqual([
        "(arg = 'foo') => {}",
        undefined,
        "arg = 'foo'",
        undefined
      ])
    })

    test('parses arrow function with two parameters', () => {
      expect(Array.from('(arg, arg2) => {}'.match(PARAMETERS))).toEqual([
        '(arg, arg2) => {}',
        undefined,
        'arg, arg2',
        undefined
      ])
    })

    test('parses arrow function with two parameters and last parameter has a default', () => {
      expect(
        Array.from("(arg, arg2 = 'foo') => {}".match(PARAMETERS))
      ).toEqual([
        "(arg, arg2 = 'foo') => {}",
        undefined,
        "arg, arg2 = 'foo'",
        undefined
      ])
    })
  })

  describe('STACKTRACE_LINE', () => {
    test('parses a line with angle brackets', () => {
      const line = '    at Object.<anonymous> (/stutter/src/lang/fn.js:9:12)'
      expect(Array.from(line.match(STACKTRACE_LINE))).toEqual([
        '    at Object.<anonymous> (/stutter/src/lang/fn.js:9:12)',
        'Object.<anonymous>',
        '/stutter/src/lang/fn.js',
        '9',
        '12'
      ])
    })
  })
})
