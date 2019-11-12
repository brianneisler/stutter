import Type from '../util/js/Type'

describe('lang.types index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqual({
      Array: expect.any(Type),
      ArrayLike: expect.any(Type),
      Boolean: expect.any(Type),
      Buffer: expect.any(Type),
      Date: expect.any(Type),
      Fn: expect.any(Type),
      Function: expect.any(Type),
      ImmutableList: expect.any(Type),
      ImmutableMap: expect.any(Type),
      ImmutableOrderedMap: expect.any(Type),
      ImmutableOrderedSet: expect.any(Type),
      ImmutableSet: expect.any(Type),
      ImmutableStack: expect.any(Type),
      Infinity: expect.any(Type),
      Key: expect.any(Type),
      Map: expect.any(Type),
      NaN: expect.any(Type),
      Number: expect.any(Type),
      Object: expect.any(Type),
      Protocol: expect.any(Type),
      Range: expect.any(Type),
      RegExp: expect.any(Type),
      Repeat: expect.any(Type),
      Seq: expect.any(Type),
      Set: expect.any(Type),
      String: expect.any(Type),
      Symbol: expect.any(Type),
      Type: expect.any(Type),
      WeakMap: expect.any(Type),
      WeakSet: expect.any(Type)
    })
  })
})
