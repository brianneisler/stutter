import Any from './types/Any'
import Self from './types/Self'
import defprotocol from './defprotocol'
import deftype from './deftype'
import satisfies from './satisfies'

describe('satisfies', () => {
  test('returns true when a protocol is satisfied by a type', () => {
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
    expect(satisfies(Fooed, instance)).toBe(true)
  })
})
