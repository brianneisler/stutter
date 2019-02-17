import Any from './types/Any'
import Self from './types/Self'
import defn from './defn'
import defprotocol from './defprotocol'
import deftype from './deftype'

describe('deftype', () => {
  it('dispatches to a protocol when implemented', () => {
    const Fooed = defprotocol('Fooed', 'The foo protocol', {
      foo: [Self, Any]
    })

    class _Foo {
      foo(any) {
        expect(any).toBe('foo')
        return 'bar'
      }
    }

    const Foo = deftype('Foo', 'A foo', _Foo, {
      [Fooed]: {
        foo: fn([Self, Any], (self, any) => self.foo(any))
      }
    })

    const foo = defn('foo', () => throw new Error('foo protocol was not called'))

    const instance = new _Foo()
    const result = foo(instance, 'foo')
    expect(result).toBe('bar')
  })

  test('correctly assigns protocols', () => {
    const TestClass = class {}
    const TestProtocol = defprotocol('TestProtocol', 'Test protocol description', {
      test: [Any]
    })
    const testDef = {
      [TestProtocol]: {
        test: (foo) => foo
      }
    }
    const type = new Type('TestName', 'Test description', TestClass, testDef)
    expect(type).toBeInstanceOf(Type)
    const instance = new TestClass()
    expect(instance[SYMBOL_PROTOCOLS]).toEqual({
      [TestProtocol]: testDef[TestProtocol]
    })
  })
})
