import Namespace from './js/Namespace'

describe('propGetNamespace', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('returns undefined if a namespace with the given name does not exist', () => {
    jest.mock('./root', () => ({}))
    const propGetNamespace = require('./propGetNamespace').default
    expect(propGetNamespace('foo')).toBe(undefined)
  })

  test('returns the Namespace whose name matches the given prop if it exists', () => {
    jest.mock('./root', () => ({}))
    const propSetNamespace = require('./propSetNamespace').default
    const propGetNamespace = require('./propGetNamespace').default

    const FooNamespace = new Namespace('foo')
    propSetNamespace('foo', FooNamespace)
    expect(propGetNamespace('foo')).toBe(FooNamespace)
  })
})
