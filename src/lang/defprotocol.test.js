import Number from './types/Number'
import Self from './types/Self'

describe('defprotocol', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('defines a protocol to the given namespace', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const defprotocol = require('./defprotocol').default
    const Protocol = require('./util/js/Protocol').default
    const definitions = {
      foo: [Self, Number]
    }
    const result = defprotocol('test.Foo', 'description', definitions)
    expect(result).toBeInstanceOf(Protocol)
    expect(result.getDefinitions()).toBe(definitions)

    const testNamespace = propGetNamespace('test')
    expect(testNamespace.get('Foo')).toEqual({
      description: 'description',
      value: result
    })
  })
})
