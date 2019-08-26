import functionToFunctionName from './functionToFunctionName'

describe('functionToFunctionName', () => {
  test('gets function name from functions', () => {
    expect(functionToFunctionName(function test() {})).toBe('test')
  })
})
