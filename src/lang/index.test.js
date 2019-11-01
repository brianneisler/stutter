describe('lang index', () => {
  test('has expected methods', () => {
    const mod = require('./')
    expect(mod).toEqualPrintDiff({
      __: expect.any(Object),
      all: expect.any(Function),
      allWith: expect.any(Function),
      always: expect.any(Function),
      apply: expect.any(Function),
      castPath: expect.any(Function),
      complement: expect.any(Function),
      compose: expect.any(Function),
      curry: expect.any(Function),
      curryN: expect.any(Function),
      externalPromise: expect.any(Function),
      defn: expect.any(Function),
      defprotocol: expect.any(Function),
      dispatchable: expect.any(Function),
      functionToString: expect.any(Function),
      get: expect.any(Function),
      getParent: expect.any(Function),
      getParentPath: expect.any(Function),
      getPath: expect.any(Function),
      getProp: expect.any(Function),
      getPropOf: expect.any(Function),
      has: expect.any(Function),
      hasPath: expect.any(Function),
      hasProp: expect.any(Function),
      hasUnicode: expect.any(Function),
      identical: expect.any(Function),
      identity: expect.any(Function),
      is: expect.any(Function),
      isArguments: expect.any(Function),
      isArray: expect.any(Function),
      isArrayBuffer: expect.any(Function),
      isArrayLike: expect.any(Function),
      isAsciiString: expect.any(Function),
      isBoolean: expect.any(Function),
      isBuffer: expect.any(Function),
      isChar: expect.any(Function),
      isDate: expect.any(Function),
      isElement: expect.any(Function),
      isError: expect.any(Function),
      isFunction: expect.any(Function),
      isGenerator: expect.any(Function),
      isGeneratorFunction: expect.any(Function),
      isImmutable: expect.any(Function),
      isImmutableCollection: expect.any(Function),
      isIndex: expect.any(Function),
      isIndexed: expect.any(Function),
      isIndexedIterator: expect.any(Function),
      isInfinity: expect.any(Function),
      isInteger: expect.any(Function),
      isIterable: expect.any(Function),
      isIterator: expect.any(Function),
      isKey: expect.any(Function),
      isKeyed: expect.any(Function),
      isKeyedIterator: expect.any(Function),
      isLength: expect.any(Function),
      isMap: expect.any(Function),
      isNaN: expect.any(Function),
      isNativeObject: expect.any(Function),
      isNil: expect.any(Function),
      isNull: expect.any(Function),
      isNumber: expect.any(Function),
      isObject: expect.any(Function),
      isObjectLike: expect.any(Function),
      isOp: expect.any(Function),
      isPlainFunction: expect.any(Function),
      isPlainObject: expect.any(Function),
      isPromise: expect.any(Function),
      isProp: expect.any(Function),
      isPrototype: expect.any(Function),
      isRegExp: expect.any(Function),
      isResolved: expect.any(Function),
      isSet: expect.any(Function),
      isString: expect.any(Function),
      isSymbol: expect.any(Function),
      isTransformer: expect.any(Function),
      isTypedArray: expect.any(Function),
      isUndefined: expect.any(Function),
      isUrl: expect.any(Function),
      isWeakMap: expect.any(Function),
      isWeakSet: expect.any(Function),
      iterate: expect.any(Function),
      iterateRight: expect.any(Function),
      iterator: expect.any(Function),
      iteratorResolver: expect.any(Function),
      iteratorToArray: expect.any(Function),
      mapForEach: expect.any(Function),
      mapToArray: expect.any(Function),
      mix: expect.any(Function),
      memoize: expect.any(Function),
      memoizeWith: expect.any(Function),
      nAry: expect.any(Function),
      nArySpread: expect.any(Function),
      nth: expect.any(Function),
      objectCreate: expect.any(Function),
      objectDefineProperty: expect.any(Function),
      objectGetOwnPropertyDescriptor: expect.any(Function),
      objectGetOwnPropertySymbols: expect.any(Function),
      objectHasOwnProperty: expect.any(Function),
      objectToIterator: expect.any(Function),
      objectKeys: expect.any(Function),
      objectToString: expect.any(Function),
      objectValues: expect.any(Function),
      op: expect.any(Function),
      pipe: expect.any(Function),
      prop: expect.any(Function),
      propOf: expect.any(Function),
      propOr: expect.any(Function),
      reflectOwnKeys: expect.any(Function),
      regExpClone: expect.any(Function),
      resolvable: expect.any(Function),
      resolve: expect.any(Function),
      resolveToGeneratorWith: expect.any(Function),
      resolveWith: expect.any(Function),
      set: expect.any(Function),
      setForEach: expect.any(Function),
      setIndex: expect.any(Function),
      setPath: expect.any(Function),
      setProp: expect.any(Function),
      setToArray: expect.any(Function),
      sleep: expect.any(Function),
      stringMatch: expect.any(Function),
      stringSize: expect.any(Function),
      stringSplit: expect.any(Function),
      stringSubstring: expect.any(Function),
      stringToArray: expect.any(Function),
      stringToLowerCase: expect.any(Function),
      stringToUpperCase: expect.any(Function),
      symbolToString: expect.any(Function),
      toArray: expect.any(Function),
      toFinite: expect.any(Function),
      toInteger: expect.any(Function),
      toNumber: expect.any(Function),
      toObject: expect.any(Function),
      toString: expect.any(Function),
      toStringTag: expect.any(Function),
      toType: expect.any(Function),
      unicodeSize: expect.any(Function),
      unicodeToArray: expect.any(Function),
      Array: expect.any(Function),
      Boolean: expect.any(Function),
      Date: expect.any(Function),
      Function: expect.any(Function),
      ImmutableList: expect.any(Function),
      ImmutableMap: expect.any(Function),
      ImmutableOrderedMap: expect.any(Function),
      ImmutableOrderedSet: expect.any(Function),
      ImmutableSet: expect.any(Function),
      ImmutableStack: expect.any(Function),
      Map: expect.any(Function),
      Number: expect.any(Function),
      Object: expect.any(Function),
      RegExp: expect.any(Function),
      Seq: expect.any(Function),
      Set: expect.any(Function),
      String: expect.any(Function),
      WeakMap: expect.any(Function),
      WeakSet: expect.any(Function)
    })
  })
})