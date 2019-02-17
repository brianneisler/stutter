import DEFAULT_NAMESPACE_NAME from '../constants/DEFAULT_NAMESPACE_NAME'
import stringParseNames from './stringParseNames'

describe('stringParseNames', () => {
  test('parses a single word as the value name and returns defaule namespace name', () => {
    expect(stringParseNames('foo')).toEqual({
      namespaceName: DEFAULT_NAMESPACE_NAME,
      valueName: 'foo'
    })

    expect(stringParseNames('Bar')).toEqual({
      namespaceName: DEFAULT_NAMESPACE_NAME,
      valueName: 'Bar'
    })

    expect(stringParseNames('f_oo')).toEqual({
      namespaceName: DEFAULT_NAMESPACE_NAME,
      valueName: 'f_oo'
    })

    expect(stringParseNames('foo-bar')).toEqual({
      namespaceName: DEFAULT_NAMESPACE_NAME,
      valueName: 'foo-bar'
    })
  })

  test('parses the left of the last dot character as the namespace name', () => {
    expect(stringParseNames('foo.bar')).toEqual({
      namespaceName: 'foo',
      valueName: 'bar'
    })

    expect(stringParseNames('Foo.bar')).toEqual({
      namespaceName: 'Foo',
      valueName: 'bar'
    })

    expect(stringParseNames('f_oo.bar')).toEqual({
      namespaceName: 'f_oo',
      valueName: 'bar'
    })

    expect(stringParseNames('foo-bar.baz')).toEqual({
      namespaceName: 'foo-bar',
      valueName: 'baz'
    })
  })

  test('parses multiple dots', () => {
    expect(stringParseNames('foo.bar.baz')).toEqual({
      namespaceName: 'foo.bar',
      valueName: 'baz'
    })

    expect(stringParseNames('foo.bar.baz.Bop')).toEqual({
      namespaceName: 'foo.bar.baz',
      valueName: 'Bop'
    })
  })

  test('throws an Error if the name cannot be parsed', () => {
    expect(() => stringParseNames('foo bar')).toThrow(Error)
  })
})
