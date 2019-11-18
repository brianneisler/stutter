import objectOmitProps from './objectOmitProps'

describe('lang.util index', () => {
  test('has expected methods', () => {
    let mod = require('./')

    // NOTE BRN: There are values exported from here that cause extremely long diffs to happen. A match is much simpler than an equals check and does not cause that to happe for this folder.
    mod = objectOmitProps(mod, ['freeGlobal', 'nodeTypes', 'root'])

    expect(mod).toEqualPrintDiff({
      anyAlways: expect.any(Function),
      anyIsArguments: expect.any(Function),
      anyIsArray: expect.any(Function),
      anyIsArrayBuffer: expect.any(Function),
      anyIsArrayLike: expect.any(Function),
      anyIsBoolean: expect.any(Function),
      anyIsBuffer: expect.any(Function),
      anyIsChar: expect.any(Function),
      anyIsDate: expect.any(Function),
      anyIsError: expect.any(Function),
      anyIsException: expect.any(Function),
      anyIsFunction: expect.any(Function),
      anyIsGenerator: expect.any(Function),
      anyIsGeneratorFunction: expect.any(Function),
      anyIsImmutable: expect.any(Function),
      anyIsImmutableCollection: expect.any(Function),
      anyIsImmutableList: expect.any(Function),
      anyIsImmutableMap: expect.any(Function),
      anyIsImmutableOrderedMap: expect.any(Function),
      anyIsImmutableOrderedSet: expect.any(Function),
      anyIsImmutableSet: expect.any(Function),
      anyIsImmutableStack: expect.any(Function),
      anyIsIndex: expect.any(Function),
      anyIsIndexedIterator: expect.any(Function),
      // anyIsIndexed: expect.any(Function),
      anyIsInfinity: expect.any(Function),
      anyIsInteger: expect.any(Function),
      anyIsIterable: expect.any(Function),
      anyIsIterator: expect.any(Function),
      anyIsKey: expect.any(Function),
      anyIsKeyedIterator: expect.any(Function),
      // anyIsKeyed: expect.any(Function),
      anyIsLength: expect.any(Function),
      anyIsMap: expect.any(Function),
      anyIsNaN: expect.any(Function),
      anyIsNativeObject: expect.any(Function),
      anyIsNil: expect.any(Function),
      anyIsNull: expect.any(Function),
      anyIsNumber: expect.any(Function),
      anyIsObject: expect.any(Function),
      anyIsObjectLike: expect.any(Function),
      anyIsOp: expect.any(Function),
      anyIsPlaceholder: expect.any(Function),
      anyIsPlainFunction: expect.any(Function),
      anyIsPlainObject: expect.any(Function),
      anyIsPromise: expect.any(Function),
      anyIsProp: expect.any(Function),
      anyIsProtocol: expect.any(Function),
      anyIsPrototype: expect.any(Function),
      anyIsRegExp: expect.any(Function),
      anyIsResolved: expect.any(Function),
      anyIsSelf: expect.any(Function),
      anyIsSeq: expect.any(Function),
      anyIsSet: expect.any(Function),
      anyIsString: expect.any(Function),
      anyIsSymbol: expect.any(Function),
      anyIsTransformer: expect.any(Function),
      anyIsType: expect.any(Function),
      anyIsTypedArray: expect.any(Function),
      anyIsUndefined: expect.any(Function),
      anyIsWeakMap: expect.any(Function),
      anyIsWeakSet: expect.any(Function),
      anyIterate: expect.any(Function),
      anyIterateRight: expect.any(Function),
      anyResolve: expect.any(Function),
      anyResolveAll: expect.any(Function),
      anyResolveAllWith: expect.any(Function),
      anyResolveToGenerator: expect.any(Function),
      anyResolveToGeneratorWith: expect.any(Function),
      anyResolveWith: expect.any(Function),
      anySatisfies: expect.any(Function),
      anyToArguments: expect.any(Function),
      anyToArray: expect.any(Function),
      anyToBoolean: expect.any(Function),
      anyToFinite: expect.any(Function),
      anyToFn: expect.any(Function),
      anyToFunction: expect.any(Function),
      anyToImmutable: expect.any(Function),
      anyToInteger: expect.any(Function),
      anyToIterator: expect.any(Function),
      anyToName: expect.any(Function),
      anyToNumber: expect.any(Function),
      anyToObject: expect.any(Function),
      anyToString: expect.any(Function),
      anyToStringTag: expect.any(Function),
      argumentsMatchToFnParameters: expect.any(Function),
      arrayClone: expect.any(Function),
      arrayConcat: expect.any(Function),
      arrayDifference: expect.any(Function),
      arrayFlatten: expect.any(Function),
      arrayForEach: expect.any(Function),
      arrayFrom: expect.any(Function),
      arrayLikeCastSlice: expect.any(Function),
      arrayLikeKeys: expect.any(Function),
      arrayLikeReduce: expect.any(Function),
      arrayLikeReduceRight: expect.any(Function),
      arrayLikeSlice: expect.any(Function),
      arrayLikeToIterator: expect.any(Function),
      arrayMap: expect.any(Function),
      arrayReduce: expect.any(Function),
      arraySlice: expect.any(Function),
      asciiSize: expect.any(Function),
      asciiToArray: expect.any(Function),
      bufferFrom: expect.any(Function),
      buildException: expect.any(Function),
      buildExpected: expect.any(Function),
      buildFn: expect.any(Function),
      buildMultiFn: expect.any(Function),
      cacheChain: expect.any(Function),
      defineAny: expect.any(Function),
      definitionToFn: expect.any(Function),
      definitionToType: expect.any(Function),
      definitionsToFn: expect.any(Function),
      definitionsToFns: expect.any(Function),
      definitionsToProtocol: expect.any(Function),
      filterProtocolsForFunctionName: expect.any(Function),
      filterTypesForProtocol: expect.any(Function),
      findTypeForClass: expect.any(Function),
      fnArity: expect.any(Function),
      fnAry: expect.any(Function),
      fnCurry: expect.any(Function),
      fnCurryArity: expect.any(Function),
      fnGetMeta: expect.any(Function),
      fnsToMultiFn: expect.any(Function),
      functionArity: expect.any(Function),
      functionAry: expect.any(Function),
      functionCatchWith: expect.any(Function),
      functionCurry: expect.any(Function),
      functionDefineLength: expect.any(Function),
      functionDefineSymbolFn: expect.any(Function),
      functionGetParameterNames: expect.any(Function),
      functionHandleExceptions: expect.any(Function),
      functionMemoize: expect.any(Function),
      functionMemoizeWith: expect.any(Function),
      functionMultiDispatch: expect.any(Function),
      functionResolve: expect.any(Function),
      functionToFunctionName: expect.any(Function),
      functionToParameterNames: expect.any(Function),
      functionToString: expect.any(Function),
      functionTypeCheck: expect.any(Function),
      // hasUnicode: expect.any(Function),
      indexEndOffset: expect.any(Function),
      iteratorResolver: expect.any(Function),
      iteratorToArray: expect.any(Function),
      mapForEach: expect.any(Function),
      mapToArray: expect.any(Function),
      namespacesFilter: expect.any(Function),
      namespacesFilterProtocols: expect.any(Function),
      namespacesFilterTypes: expect.any(Function),
      numberIsFinite: expect.any(Function),
      objectAssign: expect.any(Function),
      objectAssignPropertyDescriptors: expect.any(Function),
      objectClonePropertyDescriptors: expect.any(Function),
      objectCreate: expect.any(Function),
      objectDefineProperty: expect.any(Function),
      objectGetOwnPropertyDescriptor: expect.any(Function),
      objectGetOwnPropertySymbols: expect.any(Function),
      objectGetProtocols: expect.any(Function),
      objectGetPrototypeOf: expect.any(Function),
      objectHasOwnProperty: expect.any(Function),
      objectKeys: expect.any(Function),
      objectMap: expect.any(Function),
      objectOmitProps: expect.any(Function),
      objectPickProps: expect.any(Function),
      objectToIterator: expect.any(Function),
      objectToString: expect.any(Function),
      objectValues: expect.any(Function),
      propGetNamespace: expect.any(Function),
      propSetNamespace: expect.any(Function),
      protocolNameToDispatcher: expect.any(Function),
      reflectOwnKeys: expect.any(Function),
      regExpClone: expect.any(Function),
      setForEach: expect.any(Function),
      setToArray: expect.any(Function),
      stringIsAsciiString: expect.any(Function),
      stringMatch: expect.any(Function),
      stringParseNames: expect.any(Function),
      stringRepeat: expect.any(Function),
      stringSize: expect.any(Function),
      stringSplit: expect.any(Function),
      stringSubstring: expect.any(Function),
      stringToArray: expect.any(Function),
      stringToLowerCase: expect.any(Function),
      stringToUpperCase: expect.any(Function),
      symbolToString: expect.any(Function),
      unicodeSize: expect.any(Function),
      unicodeToArray: expect.any(Function)
    })
  })
})
