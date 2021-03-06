import Type from '../classes/Type'

describe('lang.types index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      Any: expect.any(Type),
      Arguments: expect.any(Type),
      Array: expect.any(Type),
      ArrayBuffer: expect.any(Type),
      ArrayLike: expect.any(Type),
      Boolean: expect.any(Type),
      Buffer: expect.any(Type),
      Character: expect.any(Type),
      Date: expect.any(Type),
      Element: expect.any(Type),
      Error: expect.any(Type),
      Exception: expect.any(Type),
      Fn: expect.any(Type),
      Function: expect.any(Type),
      Generator: expect.any(Type),
      GeneratorFunction: expect.any(Type),
      Immutable: expect.any(Type),
      ImmutableCollection: expect.any(Type),
      ImmutableList: expect.any(Type),
      ImmutableMap: expect.any(Type),
      ImmutableOrderedMap: expect.any(Type),
      ImmutableOrderedSet: expect.any(Type),
      ImmutableSet: expect.any(Type),
      ImmutableStack: expect.any(Type),
      Index: expect.any(Type),
      Infinity: expect.any(Type),
      Integer: expect.any(Type),
      Iterator: expect.any(Type),
      Key: expect.any(Type),
      Map: expect.any(Type),
      NaN: expect.any(Type),
      Nil: expect.any(Type),
      Null: expect.any(Type),
      Number: expect.any(Type),
      Object: expect.any(Type),
      ObjectLike: expect.any(Type),
      Observer: expect.any(Type),
      Op: expect.any(Type),
      Path: expect.any(Type),
      PlainObject: expect.any(Type),
      PositiveInteger: expect.any(Type),
      Promise: expect.any(Type),
      Property: expect.any(Type),
      Protocol: expect.any(Type),
      RegExp: expect.any(Type),
      Resolved: expect.any(Type),
      Self: expect.any(Type),
      Seq: expect.any(Type),
      Set: expect.any(Type),
      String: expect.any(Type),
      Symbol: expect.any(Type),
      Type: expect.any(Type),
      Undefined: expect.any(Type),
      Walker: expect.any(Type),
      WeakMap: expect.any(Type),
      WeakSet: expect.any(Type)
    })
  })
})
