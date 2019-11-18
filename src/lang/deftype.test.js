describe('deftype', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('defines a Type to the named Namespace', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const deftype = require('./deftype').default
    const Type = require('./util/js/Type').default
    const ImmutableMap = require('./util/js/ImmutableMap').default
    const testDef = {
      class: class {},
      protocols: []
    }
    const result = deftype('test.Foo', 'description', testDef)
    expect(result).toBeInstanceOf(Type)
    expect(result).toEqual({
      class: testDef.class,
      protocols: new ImmutableMap()
    })

    const testNamespace = propGetNamespace('test')
    expect(testNamespace.get('Foo')).toEqual({
      description: 'description',
      value: result
    })
  })

  it('dispatches to a protocol when implemented', () => {
    jest.mock('./util/root', () => ({}))
    const Protocol = require('./types/Protocol').default
    const Type = require('./types/Type').default
    const Self = require('./types/Self').default
    const Any = require('./types/Any').default
    const defn = require('./defn').default
    const defprotocol = require('./defprotocol').default
    const deftype = require('./deftype').default
    const fn = require('./fn').default
    const Fooed = defprotocol('Fooed', 'The foo protocol', {
      foo: [Self, Any]
    })

    class _Foo {
      foo(any) {
        expect(any).toBe('foo')
        return 'bar'
      }
    }

    deftype('Foo', 'A foo', {
      class: _Foo,
      is: (any) => any instanceof _Foo,
      protocols: [
        Fooed,
        {
          foo: fn([Self, Any], (self, any) => self.foo(any))
        }
      ]
    })

    const foo = defn('foo', () => {
      throw new Error('foo protocol was not called')
    })

    const instance = new _Foo()
    const result = foo(instance, 'foo')
    expect(result).toBe('bar')
  })

  // test('correctly assigns protocols', () => {
  //   jest.mock('./util/root', () => ({}))
  //   const propGetNamespace = require('./util/propGetNamespace').default
  //   const deftype = require('./deftype').default
  //   const defprotocol = require('./defprotocol').default
  //   const Type = require('./util/js/Type').default

  //   const TestClass = class {}
  //   const TestProtocol = defprotocol('TestProtocol', 'Test protocol description', {
  //     test: [Any]
  //   })
  //   const testDef = {
  //     [TestProtocol]: {
  //       test: (foo) => foo
  //     }
  //   }
  //   const type = new Type('TestName', 'Test description', TestClass, testDef)
  //   expect(type).toBeInstanceOf(Type)
  //   const instance = new TestClass()
  //   expect(instance[SYMBOL_PROTOCOLS]).toEqual({
  //     [TestProtocol]: testDef[TestProtocol]
  //   })
  // })
})
