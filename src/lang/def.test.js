import { DEFAULT_NAMESPACE_NAME } from './constants'

describe('def', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('defines a value on the default namespace by default', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const def = require('./def').default

    const result = def('test', 'test value')
    expect(result).toBe('test value')

    const defaultNamespace = propGetNamespace(DEFAULT_NAMESPACE_NAME)
    expect(defaultNamespace.get('test')).toEqual({
      description: '',
      value: 'test value'
    })
  })

  test('accepts a description as an additional parameter', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const def = require('./def').default

    const result = def('test', 'test description', 'test value')
    expect(result).toBe('test value')

    const defaultNamespace = propGetNamespace(DEFAULT_NAMESPACE_NAME)
    expect(defaultNamespace.get('test')).toEqual({
      description: 'test description',
      value: 'test value'
    })
  })

  test('parses the name for a namespace', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const def = require('./def').default

    const result = def('my-namespace.test', 'test description', 'test value')
    expect(result).toBe('test value')

    const testNamespace = propGetNamespace('my-namespace')
    expect(testNamespace.get('test')).toEqual({
      description: 'test description',
      value: 'test value'
    })
  })
})
