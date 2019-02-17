import camelCase from './camelCase'

describe('camelCase', () => {
  test('converts space separators into camel case', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar')
  })

  test('converts kebab case into camel case', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar')
  })

  test('converts snake case into camel case', () => {
    expect(camelCase('__FOO_BAR__')).toBe('fooBar')
  })
})
