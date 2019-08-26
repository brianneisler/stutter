import Namespace from './js/Namespace'

describe('propSetNamespace', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('sets the namespace by name', () => {
    jest.mock('./root', () => ({}))
    const propGetNamespace = require('./propGetNamespace').default
    const propSetNamespace = require('./propSetNamespace').default
    const FooNamespace = new Namespace('foo')

    expect(propGetNamespace('foo')).toBe(undefined)
    propSetNamespace('foo', FooNamespace)
    expect(propGetNamespace('foo')).toBe(FooNamespace)
  })
})
