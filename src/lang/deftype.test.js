describe('deftype', () => {
  beforeEach(() => {
    jest.resetModules()
    jest.clearAllMocks()
  })

  test('defines a Type to the named Namespace', () => {
    jest.mock('./util/root', () => ({}))
    const propGetNamespace = require('./util/propGetNamespace').default
    const deftype = require('./deftype').default
    const Type = require('./classes/Type').default
    const ImmutableMap = require('./classes/ImmutableMap').default
    const testDef = {
      class: class {},
      protocols: []
    }
    const result = deftype('test.Foo', 'description', testDef)
    expect(result).toBeInstanceOf(Type)
    expect(result).toMatchObject({
      class: testDef.class,
      protocols: new ImmutableMap()
    })

    const testNamespace = propGetNamespace('test')
    const Foo = testNamespace.get('Foo')
    expect(Foo.meta).toEqual({
      description: 'description',
      name: 'Foo',
      namespace: 'test'
    })
    expect(Foo.value).toBe(result)
  })

  it('dispatches to a protocol when implemented', () => {
    jest.mock('./util/root', () => ({}))

    // NOTE BRN: We have to require the Object type so that it is loaded and the
    // namespace knows about it. Otherwise it will be empty.
    require('./types/Object')
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

  it('Allows for defn a function that implements a protocol', () => {
    jest.mock('./util/root', () => ({}))

    // NOTE BRN: We have to require the Object type so that it is loaded and the
    // namespace knows about it. Otherwise it will be empty.
    require('./types/Object')
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

    const foo = defn('foo', { description: 'test' })

    const bar = defn(
      'bar',
      {
        description: 'test bar'
      },
      {
        definitions: [[Fooed, Any], foo, [Fooed, Any, Any], foo]
      }
    )
    const instance = new _Foo()
    const result = bar(instance, 'foo')
    expect(result).toBe('bar')
  })
})
