import DEFAULT_NAMESPACE_NAME from '../constants/DEFAULT_NAMESPACE_NAME'

describe('defineAny', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('defines a value on the default namespace by default', () => {
    jest.mock('./root', () => ({}))
    const propGetNamespace = require('./propGetNamespace').default
    const defineAny = require('./defineAny').default

    const result = defineAny('test', 'test description', 'test value')
    expect(result).toBe('test value')

    const defaultNamespace = propGetNamespace(DEFAULT_NAMESPACE_NAME)
    expect(defaultNamespace.get('test')).toEqual({
      description: 'test description',
      value: 'test value'
    })
  })

  test('parses the name for a namespace', () => {
    jest.mock('./root', () => ({}))
    const propGetNamespace = require('./propGetNamespace').default
    const defineAny = require('./defineAny').default

    const result = defineAny('my-namespace.test', 'test description', 'test value')
    expect(result).toBe('test value')

    const testNamespace = propGetNamespace('my-namespace')
    expect(testNamespace.get('test')).toEqual({
      description: 'test description',
      value: 'test value'
    })
  })
})
