import objectOmitProps from './objectOmitProps'

describe('lang.util index', () => {
  test('has expected methods', () => {
    let mod = require('./')

    // NOTE BRN: There are values exported from here that cause extremely long diffs to happen. A match is much simpler than an equals check and does not cause that to happe for this folder.
    mod = objectOmitProps(mod, ['freeGlobal', 'nodeTypes', 'root'])

    expect(mod).toEqualPrintDiff({
      anyAlways: expect.any(Function),
      anyDeletePathWith: expect.any(Function),
      anyFilterTypes: expect.any(Function),
      anyFindType: expect.any(Function),
      anyGetPathWith: expect.any(Function),
      anyHasKey: expect.any(Function),
      anyHasPathWith: expect.any(Function),
      anyHasProperty: expect.any(Function),
      anyIdenticalWithAny: expect.any(Function),
      anyIs: expect.any(Function),
      anyIsArguments: expect.any(Function),
      anyIsArray: expect.any(Function),
      anyIsArrayBuffer: expect.any(Function),
      anyIsArrayLike: expect.any(Function),
      anyIsBoolean: expect.any(Function),
      anyIsBuffer: expect.any(Function),
      anyIsCharacter: expect.any(Function),
      anyIsDate: expect.any(Function),
      anyIsElement: expect.any(Function),
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
      anyIsObserver: expect.any(Function),
      anyIsOp: expect.any(Function),
      anyIsPath: expect.any(Function),
      anyIsPlaceholder: expect.any(Function),
      anyIsPlainFunction: expect.any(Function),
      anyIsPlainObject: expect.any(Function),
      anyIsPromise: expect.any(Function),
      anyIsProperty: expect.any(Function),
      anyIsProtocol: expect.any(Function),
      anyIsPrototype: expect.any(Function),
      anyIsRegExp: expect.any(Function),
      anyIsResolved: expect.any(Function),
      anyIsSelf: expect.any(Function),
      anyIsSeparator: expect.any(Function),
      anyIsSeq: expect.any(Function),
      anyIsSet: expect.any(Function),
      anyIsString: expect.any(Function),
      anyIsSymbol: expect.any(Function),
      anyIsTransformer: expect.any(Function),
      anyIsType: expect.any(Function),
      anyIsTypedArray: expect.any(Function),
      anyIsUndefined: expect.any(Function),
      anyIsWalker: expect.any(Function),
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
      anyToElement: expect.any(Function),
      anyToFinite: expect.any(Function),
      anyToFn: expect.any(Function),
      anyToFunction: expect.any(Function),
      anyToImmutable: expect.any(Function),
      anyToInteger: expect.any(Function),
      anyToIterator: expect.any(Function),
      anyToName: expect.any(Function),
      anyToNumber: expect.any(Function),
      anyToObject: expect.any(Function),
      anyToPath: expect.any(Function),
      anyToPromise: expect.any(Function),
      anyToString: expect.any(Function),
      anyToStringTag: expect.any(Function),
      anyUpdatePathWith: expect.any(Function),
      argumentsEquals: expect.any(Function),
      argumentsMatchToFnParameters: expect.any(Function),
      arrayClone: expect.any(Function),
      arrayConcat: expect.any(Function),
      arrayDeleteIndex: expect.any(Function),
      arrayDifference: expect.any(Function),
      arrayEquals: expect.any(Function),
      arrayFilter: expect.any(Function),
      arrayFlatten: expect.any(Function),
      arrayForEach: expect.any(Function),
      arrayFrom: expect.any(Function),
      arrayGetIndex: expect.any(Function),
      arrayHasIndex: expect.any(Function),
      arrayIndexIterator: expect.any(Function),
      arrayIndexOfAtIndex: expect.any(Function),
      arrayIndexes: expect.any(Function),
      arrayKeys: expect.any(Function),
      arrayLikeCastSlice: expect.any(Function),
      arrayLikeIterateInSeries: expect.any(Function),
      arrayLikeKeys: expect.any(Function),
      arrayLikeReduce: expect.any(Function),
      arrayLikeReduceRight: expect.any(Function),
      arrayLikeSlice: expect.any(Function),
      arrayLikeToIterator: expect.any(Function),
      arrayMap: expect.any(Function),
      arrayProperties: expect.any(Function),
      arrayReduce: expect.any(Function),
      arrayRemove: expect.any(Function),
      arraySetIndex: expect.any(Function),
      arraySlice: expect.any(Function),
      arraySplice: expect.any(Function),
      arrayTail: expect.any(Function),
      arrayUpdateIndex: expect.any(Function),
      asciiSize: expect.any(Function),
      asciiToArray: expect.any(Function),
      booleanEquals: expect.any(Function),
      bufferEquals: expect.any(Function),
      bufferFrom: expect.any(Function),
      buildException: expect.any(Function),
      buildExpected: expect.any(Function),
      buildFn: expect.any(Function),
      buildMultiFn: expect.any(Function),
      cacheChain: expect.any(Function),
      createContext: expect.any(Function),
      createError: expect.any(Function),
      createImmutableList: expect.any(Function),
      createIndex: expect.any(Function),
      createInt8Array: expect.any(Function),
      createJSCallee: expect.any(Function),
      createKey: expect.any(Function),
      createProperty: expect.any(Function),
      dateEquals: expect.any(Function),
      defineAny: expect.any(Function),
      definitionToFn: expect.any(Function),
      definitionToType: expect.any(Function),
      definitionsToFn: expect.any(Function),
      definitionsToFns: expect.any(Function),
      definitionsToProtocol: expect.any(Function),
      errorEquals: expect.any(Function),
      filterProtocolsForFunctionName: expect.any(Function),
      filterTypesForProtocol: expect.any(Function),
      findTypeForClass: expect.any(Function),
      fnArity: expect.any(Function),
      fnAry: expect.any(Function),
      fnComplement: expect.any(Function),
      fnCurry: expect.any(Function),
      fnCurryArity: expect.any(Function),
      fnGetMeta: expect.any(Function),
      fnsDispatch: expect.any(Function),
      fnsGetAllDispatchableFns: expect.any(Function),
      fnsToMultiFn: expect.any(Function),
      functionArity: expect.any(Function),
      functionAry: expect.any(Function),
      functionCatchWith: expect.any(Function),
      functionComplement: expect.any(Function),
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
      functionsPipe: expect.any(Function),
      // hasUnicode: expect.any(Function),
      immutableListDeleteIndex: expect.any(Function),
      immutableListForEach: expect.any(Function),
      immutableListGetIndex: expect.any(Function),
      immutableListHasIndex: expect.any(Function),
      immutableListLength: expect.any(Function),
      immutableListPop: expect.any(Function),
      immutableListPush: expect.any(Function),
      immutableListSetIndex: expect.any(Function),
      immutableMapForEach: expect.any(Function),
      indexEndOffset: expect.any(Function),
      iteratorIterateInParallel: expect.any(Function),
      iteratorIterateInSeries: expect.any(Function),
      iteratorResolver: expect.any(Function),
      iteratorToArray: expect.any(Function),
      keyedDeleteKey: expect.any(Function),
      keyedGetKey: expect.any(Function),
      keyedHasKey: expect.any(Function),
      keyedSetKey: expect.any(Function),
      keyedToKeyedIterator: expect.any(Function),
      mapClone: expect.any(Function),
      mapDeleteKey: expect.any(Function),
      mapForEach: expect.any(Function),
      mapGetKey: expect.any(Function),
      mapHasKey: expect.any(Function),
      mapSetKey: expect.any(Function),
      mapToArray: expect.any(Function),
      mapUpdateKey: expect.any(Function),
      namespacesFilter: expect.any(Function),
      namespacesFilterProtocols: expect.any(Function),
      namespacesFilterTypes: expect.any(Function),
      namespacesReduceFnsByProtocolFnName: expect.any(Function),
      numberIsFinite: expect.any(Function),
      objectAssign: expect.any(Function),
      objectAssignPropertyDescriptors: expect.any(Function),
      objectClone: expect.any(Function),
      objectClonePropertyDescriptors: expect.any(Function),
      objectCreate: expect.any(Function),
      objectDefineProperty: expect.any(Function),
      objectDeleteProperty: expect.any(Function),
      objectForEach: expect.any(Function),
      objectGetOwnPropertyDescriptor: expect.any(Function),
      objectGetOwnPropertySymbols: expect.any(Function),
      objectGetProperty: expect.any(Function),
      objectGetPrototypeOf: expect.any(Function),
      objectHasOwnProperty: expect.any(Function),
      objectKeys: expect.any(Function),
      objectMap: expect.any(Function),
      objectMutateDeleteProperty: expect.any(Function),
      objectMutateSetProperty: expect.any(Function),
      objectMutateUpdateProperty: expect.any(Function),
      objectOmitProps: expect.any(Function),
      objectPickProps: expect.any(Function),
      objectProperties: expect.any(Function),
      objectSetProperty: expect.any(Function),
      objectShallowEquals: expect.any(Function),
      objectToIterator: expect.any(Function),
      objectToString: expect.any(Function),
      objectUpdateProperty: expect.any(Function),
      objectValues: expect.any(Function),
      parameterToString: expect.any(Function),
      parametersToString: expect.any(Function),
      propGetNamespace: expect.any(Function),
      propSetNamespace: expect.any(Function),
      protocolNameToDispatcher: expect.any(Function),
      protocolsGroupByFunctionName: expect.any(Function),
      reflectOwnKeys: expect.any(Function),
      regExpClone: expect.any(Function),
      regExpEquals: expect.any(Function),
      setForEach: expect.any(Function),
      setToArray: expect.any(Function),
      sourceToString: expect.any(Function),
      stringDeleteIndex: expect.any(Function),
      stringGetIndex: expect.any(Function),
      stringHasIndex: expect.any(Function),
      stringHasUnicodeSymbols: expect.any(Function),
      stringIndexIterator: expect.any(Function),
      stringIsAsciiString: expect.any(Function),
      stringMatch: expect.any(Function),
      stringParseNames: expect.any(Function),
      stringRepeat: expect.any(Function),
      stringSetIndex: expect.any(Function),
      stringSize: expect.any(Function),
      stringSplit: expect.any(Function),
      stringSubstring: expect.any(Function),
      stringToArray: expect.any(Function),
      stringToLowerCase: expect.any(Function),
      stringToPath: expect.any(Function),
      stringToUpperCase: expect.any(Function),
      stringUpdateIndex: expect.any(Function),
      symbolToString: expect.any(Function),
      unicodeSize: expect.any(Function),
      unicodeToArray: expect.any(Function),
      valueOfIdentical: expect.any(Function)
    })
  })
})
