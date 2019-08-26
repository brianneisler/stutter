import functionGetParameterNames from './functionGetParameterNames'

describe('functionGetParameterNames', () => {
  test('returns an empty array on a function with no parameters', () => {
    expect(functionGetParameterNames(() => {})).toEqual([])
    expect(functionGetParameterNames(async () => {})).toEqual([])
    expect(functionGetParameterNames(function() {})).toEqual([])
    expect(functionGetParameterNames(async function() {})).toEqual([])
    expect(functionGetParameterNames(function*() {})).toEqual([])
    expect(functionGetParameterNames(function foo() {})).toEqual([])
    expect(functionGetParameterNames(async function foo() {})).toEqual([])
    expect(functionGetParameterNames(function* foo() {})).toEqual([])
  })

  test('returns an array with name on a function with one parameters', () => {
    expect(functionGetParameterNames((arg) => {})).toEqual(['arg'])
    expect(functionGetParameterNames(async (arg) => {})).toEqual(['arg'])
    expect(functionGetParameterNames(function(arg) {})).toEqual(['arg'])
    expect(functionGetParameterNames(async function(arg) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function*(arg) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function foo(arg) {})).toEqual(['arg'])
    expect(functionGetParameterNames(async function foo(arg) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function* foo(arg) {})).toEqual(['arg'])
  })

  test('returns an array with names on a function with two parameters', () => {
    expect(functionGetParameterNames((arg, arg2) => {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(async (arg, arg2) => {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(function(arg, arg2) {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(async function(arg, arg2) {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(function*(arg, arg2) {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(function foo(arg, arg2) {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(async function foo(arg, arg2) {})).toEqual(['arg', 'arg2'])
    expect(functionGetParameterNames(function* foo(arg, arg2) {})).toEqual(['arg', 'arg2'])
  })

  test('ignores parameter with spread operator', () => {
    expect(functionGetParameterNames((arg, ...rest) => {})).toEqual(['arg'])
    expect(functionGetParameterNames(async (arg, ...rest) => {})).toEqual(['arg'])
    expect(functionGetParameterNames(function(arg, ...rest) {})).toEqual(['arg'])
    expect(functionGetParameterNames(async function(arg, ...rest) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function*(arg, ...rest) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function foo(arg, ...rest) {})).toEqual(['arg'])
    expect(functionGetParameterNames(async function foo(arg, ...rest) {})).toEqual(['arg'])
    expect(functionGetParameterNames(function* foo(arg, ...rest) {})).toEqual(['arg'])
  })

  test('drops args at first default', () => {
    expect(functionGetParameterNames((arg = 'foo') => {})).toEqual([])
    expect(functionGetParameterNames((arg, arg2 = 'foo') => {})).toEqual(['arg'])
    expect(functionGetParameterNames((arg, arg2 = 'foo', arg3) => {})).toEqual(['arg'])
    expect(functionGetParameterNames((arg, arg2, arg3 = 'foo') => {})).toEqual(['arg', 'arg2'])
  })

  test('handles args with objects as defaults', () => {
    expect(functionGetParameterNames((arg = {}) => {})).toEqual([])
    expect(functionGetParameterNames((arg, arg2 = {}) => {})).toEqual(['arg'])
  })

  test('handles multi line functions', () => {
    expect(
      functionGetParameterNames((arg) => {
        return arg
      })
    ).toEqual(['arg'])
    expect(
      functionGetParameterNames((arg, arg2) => {
        return arg2
      })
    ).toEqual(['arg', 'arg2'])
  })

  test('handles functions with comments in parameters', () => {
    expect(
      functionGetParameterNames((arg /* foo */) => {
        return arg
      })
    ).toEqual(['arg'])
    expect(
      functionGetParameterNames((arg, /* foo */ arg2 /* foo */) => {
        return arg2
      })
    ).toEqual(['arg', 'arg2'])
  })
})
