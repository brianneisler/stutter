# API

*Legend*
* *&ast;TODO* - Immutable.JS support still needs to be implemented

## TOC
* [Array and Immutable.List](#array-and-immutablelist)
  + [`butLast()`](#butlast)
  + [`chunk()`](#chunk)
  + [`circularShift()`](#circularshift)
  + [`compact()`](#compact)
  + [`concat()`](#concat)
  + [`difference()`](#difference)
  + [`differenceBy()`](#differenceby)
  + [`differenceWith()`](#differencewith)
  + [`drop()`](#drop)
  + [`dropRight()`](#dropright)
  + [`dropRightWhile()`](#droprightwhile)
  + [`dropWhile()`](#dropwhile)
  + [`fill()`](#fill) *&ast;TODO*
  + [`findIndex()`](#findindex)
  + [`findLastIndex()`](#findlastindex)
  + [`flatten()`](#flatten)
  + [`flattenDeep()`](#flattendeep)
  + [`flattenDepth()`](#flattendepth)
  + [`fromPairs()`](#frompairs) *&ast;TODO*
  + [`head()`](#head)
  + [`indexOf()`](#indexof)
  + [`initial()`](#initial) *&ast;TODO*
  + [`intersection()`](#intersection) *&ast;TODO*
  + [`intersectionBy()`](#intersectionby) *&ast;TODO*
  + [`intersectionWith()`](#intersectionwith) *&ast;TODO*
  + [`join()`](#join)
  + [`last()`](#last)
  + [`lastIndexOf()`](#lastindexof)
  + [`nth()`](#nth) *&ast;TODO*
  + [`pop()`](#pop)
  + [`pull()`](#pull)
  + [`pullAll()`](#pullall)
  + [`pullAllBy()`](#pullallby)
  + [`pullAllRight()`](#pullallright)
  + [`pullAllWith()`](#pullallwith)
  + [`pullAt()`](#pullat)
  + [`pullRight()`](#pullright)
  + [`push()`](#push)
  + [`pushAt()`](#pushat)
  + [`remove()`](#remove) *&ast;TODO*
  + [`reverse()`](#reverse)
  + [`shift()`](#shift)
  + [`slice()`](#slice)
  + [`sortedIndex()`](#sortedindex) *&ast;TODO*
  + [`sortedIndexBy()`](#sortedindexby) *&ast;TODO*
  + [`sortedIndexOf()`](#sortedindexof) *&ast;TODO*
  + [`sortedLastIndex()`](#sortedlastindex) *&ast;TODO*
  + [`sortedLastIndexBy()`](#sortedlastindexby) *&ast;TODO*
  + [`sortedLastIndexOf()`](#sortedlastindexof) *&ast;TODO*
  + [`sortedUniq()`](#sorteduniq) *&ast;TODO*
  + [`sortedUniqueBy()`](#sorteduniqueby) *&ast;TODO*
  + [`tail()`](#tail)
  + [`take()`](#take)
  + [`takeRight()`](#takeright)
  + [`takeRightWhile()`](#takerightwhile)
  + [`takeWhile()`](#takewhile)
  + [`union()`](#union) *&ast;TODO*
  + [`unionBy()`](#unionby) *&ast;TODO*
  + [`unionWith()`](#unionwith) *&ast;TODO*
  + [`uniq()`](#uniq)
  + [`uniqBy()`](#uniqby)
  + [`uniqWith()`](#uniqwith)
  + [`unzip()`](#unzip) *&ast;TODO*
  + [`unzipWith()`](#unzipwith) *&ast;TODO*
  + [`without()`](#without) *&ast;TODO*
  + [`xor()`](#xor) *&ast;TODO*
  + [`xorBy()`](#xorby) *&ast;TODO*
  + [`xorPartition()`](#xorpartition) *&ast;TODO*
  + [`xorWith()`](#xorwith) *&ast;TODO*
  + [`zip()`](#zip) *&ast;TODO*
  + [`zipObject()`](#zipobject) *&ast;TODO*
  + [`zipObjectDeep()`](#zipobjectdeep) *&ast;TODO*
  + [`zipWith()`](#zipwith) *&ast;TODO*
* [Collection and Immutable.Iterable](#collection-and-immutableiterable)
  + [`contains()`](#contains)
  + [`count()`](#count)
  + [`countBy()`](#countby) *&ast;TODO*
  + [`each()`](#each)
  + [`every()`](#every)
  + [`filter()`](#filter)
  + [`filterNot()`](#filternot)
  + [`find()`](#find)
  + [`findLast()`](#findlast) *&ast;TODO*
  + [`first()`](#first)
  + [`flatMap()`](#flatmap) *&ast;TODO*
  + [`flatMapDeep()`](#flatmapdeep) *&ast;TODO*
  + [`flatMapDepth()`](#flatmapdepth) *&ast;TODO*
  + [`forEach()`](#foreach)
  + [`forEachRight()`](#foreachright)
  + [`groupBy()`](#groupBy)
  + [`includes()`](#includes)
  + [`includesWith()`](#includeswith)
  + [`invokeMap()`](#invokemap) *&ast;TODO*
  + [`keyBy()`](#keyby) *&ast;TODO*
  + [`map()`](#map)
  + [`orderBy()`](#orderby) *&ast;TODO*
  + [`partition()`](#partition) *&ast;TODO*
  + [`reduce()`](#reduce)
  + [`reduceReducers()`](#reducereducers)
  + [`reduceReducersRight()`](#reducereducersright)
  + [`reduceRight()`](#reduceright)
  + [`reject()`](#reject)
  + [`sample()`](#sample) *&ast;TODO*
  + [`sampleSize()`](#samplesize) *&ast;TODO*
  + [`shuffle()`](#shuffle) *&ast;TODO*
  + [`size()`](#size)
  + [`slice()`](#slice)
  + [`some()`](#some)
  + [`sortBy()`](#sortby) *&ast;TODO*
  + [`walk()`](#walk)
* [Date](#date)
  + [`now()`](#now)
* [Function](#function)
  + [`after()`](#after)
  + [`apply()`](#apply)
  + [`ary()`](#ary)
  + [`before()`](#before)
  + [`bind()`](#bind)
  + [`bindKey()`](#bindkey)
  + [`call()`](#call)
  + [`circ()`](#circ)
  + [`compose()`](#compose)
  + [`curry()`](#curry)
  + [`curryRight()`](#curryright)
  + [`debounce()`](#debounce)
  + [`defer()`](#defer)
  + [`delay()`](#delay)
  + [`flip()`](#flip)
  + [`memoize()`](#memoize)
  + [`negate()`](#negate)
  + [`once()`](#once)
  + [`overArg()`](#overarg)
  + [`overArgs()`](#overargs)
  + [`partial()`](#partial)
  + [`partialRight()`](#partialright)
  + [`rearg()`](#rearg)
  + [`rest()`](#rest)
  + [`select()`]('#select')
  + [`spread()`](#spread)
  + [`throttle()`](#throttle)
  + [`unary()`](#unary)
  + [`wrap()`](#wrap)
* [Lang](#lang)
  + [`castArray()`](#castarray) *&ast;TODO*
  + [`clone()`](#clone)
  + [`cloneDeep()`](#clonedeep)
  + [`cloneDeepWith()`](#clonedeepwith)
  + [`cloneWith()`](#clonewith)
  + [`conformsTo()`](#conformsto) *&ast;TODO*
  + [`eq()`](#eq)
  + [`gt()`](#gt)
  + [`gte()`](#gte)
  + [`isArguments()`](#isarguments)
  + [`isArray()`](#isarray)
  + [`isArrayBuffer()`](#isarraybuffer)
  + [`isArrayLike()`](#isarraylike)
  + [`isArrayLikeObject()`](#isarraylikeobject)
  + [`isAssociative()`](#isassociative)
  + [`isBatchable()`](#isbatchable)
  + [`isBoolean()`](#isboolean)
  + [`isBuffer()`](#isbuffer)
  + [`isDate()`](#isdate)
  + [`isElement()`](#iselement)
  + [`isEmpty()`](#isempty)
  + [`isEqual()`](#isequal)
  + [`isEqualWith()`](#isequalwith)
  + [`isError()`](#iserror)
  + [`isFinite()`](#isfinite)
  + [`isFunction()`](#isfunction)
  + [`isGenerator()`](#isgenerator)
  + [`isGeneratorFunction()`](#isgeneratorfunction)
  + [`isIm()`](#isim)
  + [`isImIndexedSeq()`](#isimindexedseq)
  + [`isimiterable()`](#isimiterable)
  + [`isImKeyedSeq()`](#isimkeyedseq)
  + [`isImList()`](#isimlist)
  + [`isImMap()`](#isimmap)
  + [`isImmutable()`](#isimmutable)
  + [`isImmutableIndexedSeq()`](#isimmutableindexedseq)
  + [`isImmutableIterable()`](#isimmutableiterable)
  + [`isImmutableKeyedSeq()`](#isimmutablekeyedseq)
  + [`isImmutableList()`](#isimmutablelist)
  + [`isImmutableMap()`](#isimmutablemap)
  + [`isImmutableOrderedMap()`](#isimmutableorderedmap)
  + [`isImmutableOrderedSet()`](#isimmutableorderedset)
  + [`isImmutableSeq()`](#isimmutableseq)
  + [`isImmutableSet()`](#isimmutableset)
  + [`isImmutableSetSeq()`](#isimmutablesetseq)
  + [`isImmutableStack()`](#isimmutablestack)
  + [`isImOrderedMap()`](#isimorderedmap)
  + [`isImOrderedSet()`](#isimorderedset)
  + [`isImSeq()`](#isimseq)
  + [`isImSet()`](#isimset)
  + [`isImSetSeq()`](#isimsetseq)
  + [`isImStack()`](#isimstack)
  + [`isIndex()`](#isindex)
  + [`isIndexed()`](#isindexed)
  + [`isInteger()`](#isinteger)
  + [`isIterable()`](#isiterable)
  + [`isIterateeCall()`](#isiterateecall)
  + [`isKey()`](#iskey)
  + [`isKeyable()`](#iskeyable)
  + [`isKeyed()`](#iskeyed)
  + [`isLength()`](#islength)
  + [`isMap()`](#ismap)
  + [`isMatch()`](#ismatch)
  + [`isMatchWith()`](#ismatchwith) *&ast;TODO*
  + [`isMutable()`](#ismutable)
  + [`isNaN()`](#isnan)
  + [`isNative()`](#isnative)
  + [`isNil()`](#isnil)
  + [`isNull()`](#isnull)
  + [`isNumber()`](#isnumber)
  + [`isObject()`](#isobject)
  + [`isObjectLike()`](#isobjectlike)
  + [`isPlainObject()`](#isplainobject)
  + [`isPrototype()`](#isprototype)
  + [`isRegExp()`](#isregexp)
  + [`isSafeInteger()`](#issafeinteger)
  + [`isSet()`](#isset)
  + [`isShallowEqual()`](#isshallowequal)
  + [`isString()`](#isstring)
  + [`isSymbol()`](#issymbol)
  + [`isTypedArray()`](#istypedarray)
  + [`isUndefined()`](#isundefined)
  + [`isWeakMap()`](#isweakmap)
  + [`isWeakSet()`](#isweakset)
  + [`iterable()`](#iterable)
  + [`iterator()`](#iterator)
  + [`isImSet()`](#isimset)
  + [`lt()`](#lt)
  + [`lte()`](#lte)
  + [`toArray()`](#toarray)
  + [`toFinite()`](#tofinite)
  + [`toIm()`](#toim)
  + [`toImIndexedSeq()`](#toimindexedseq)
  + [`toImIterable()`](#toimiterable)
  + [`toImKeyedSeq()`](#toimkeyedseq)
  + [`toImList()`](#toimlist)
  + [`toImMap()`](#toimmap)
  + [`toImmutable()`](#toimmutable)
  + [`toImmutableIndexedSeq()`](#toimmutableindexedseq)
  + [`toImmutableIterable()`](#toimmutableiterable)
  + [`toImmutableKeyedSeq()`](#toimmutablekeyedseq)
  + [`toImmutableList()`](#toimmutablelist)
  + [`toImmutableMap()`](#toimmutablemap)
  + [`toImmutableOrderedMap()`](#toimmutableorderedmap)
  + [`toImmutableOrderedSet()`](#toimmutableorderedset)
  + [`toImmutableSeq()`](#toimmutableseq)
  + [`toImmutableSet()`](#toimmutableset)
  + [`toImmutableSetSeq()`](#toimmutablesetseq)
  + [`toImmutableStack()`](#toimmutablestack)
  + [`toImOrderedMap)`](#toimorderedmap)
  + [`toImOrderedSet()`](#toimorderedset)
  + [`toImSeq()`](#toimseq)
  + [`toImSet()`](#toimset)
  + [`toImSetSeq()`](#toimsetseq)
  + [`toImStack()`](#toimstack)
  + [`toIndexed()`](#toindexed)
  + [`toInteger()`](#tointeger)
  + [`toIterable()`](#toiterable)
  + [`toLength()`](#tolength)
  + [`toMutable()`](#tomutable)
  + [`toNumber()`](#tonumber)
  + [`toObject()`](#toobject)
  + [`toPlainObject()`](#toplainobject)
  + [`toSageInteger()`](#tosafeinteger)
  + [`toSource()`](#tosource)
  + [`toString()`](#tostring)
* [Math](#math)
  + [`add()`](#add)
  + [`ceil()`](#ceil)
  + [`divide()`](#divide)
  + [`floor()`](#floor)
  + [`max()`](#max)
  + [`maxBy()`](#maxby)
  + [`mean()`](#mean)
  + [`meanBy()`](#meanby)
  + [`min()`](#min)
  + [`minBy()`](#minby)
  + [`multiply()`](#multiply)
  + [`round()`](#round)
  + [`subtract()`](#subtract)
  + [`sum()`](#sum)
  + [`sumBy()`](#sumby)
* [Number](#number)
  + [`clamp()`](#clamp)
  + [`inRange()`](#inrange)
  + [`random()`](#random)
* [Object and Immutable.Map](#object-and-immutablemap)
  + [`assign()`](#assign)
  + [`assignIn()`](#assignin) *&ast;TODO*
  + [`assignInWith()`](#assigninwith) *&ast;TODO*
  + [`assignWith()`](#assignwith) *&ast;TODO*
  + [`assoc()`](#assoc)
  + [`assocWith()`](#assocwith)
  + [`at()`](#at)
  + [`create()`](#create) *&ast;TODO*
  + [`delete()`](#delete)
  + [`defaults()`](#defaults) *&ast;TODO*
  + [`defaultsDeep()`](#defaultsdeep) *&ast;TODO*
  + [`dissoc()`](#dissoc)
  + [`findKey()`](#findkey) *&ast;TODO*
  + [`findLastKey()`](#findlastkey) *&ast;TODO*
  + [`forIn()`](#forin) *&ast;TODO*
  + [`forInRight()`](#forinright) *&ast;TODO*
  + [`forOwn()`](#forown) *&ast;TODO*
  + [`forOwnRight()`](#forownright) *&ast;TODO*
  + [`functions()`](#functions)
  + [`functionsIn()`](#functionsin) *&ast;TODO*
  + [`get()`](#get)
  + [`getPrototype()`](#getprototype)
  + [`has()`](#has)
  + [`hasIn()`](#hasin) *&ast;TODO*
  + [`invert()`](#invert) *&ast;TODO*
  + [`invertBy()`](#invertby) *&ast;TODO*
  + [`invoke()`](#invoke) *&ast;TODO*
  + [`keys()`](#keys)
  + [`keysIn()`](#keysin) *&ast;TODO*
  + [`mapKeys()`](#mapkeys) *&ast;TODO*
  + [`mapValues()`](#mapvalues) *&ast;TODO*
  + [`merge()`](#merge)
  + [`mergeAt()`](#mergeat)
  + [`mergeWith()`](#mergewith) *&ast;TODO*
  + [`omit()`](#omit)
  + [`omitBy()`](#omitby)
  + [`pick()`](#pick)
  + [`pickBy()`](#pickby) *&ast;TODO*
  + [`result()`](#result) *&ast;TODO*
  + [`set()`](#set)
  + [`setWith()`](#setwith)
  + [`toPairs()`](#topairs) *&ast;TODO*
  + [`toPairsIn()`](#topairsin) *&ast;TODO*
  + [`transform()`](#transform) *&ast;TODO*
  + [`unset()`](#unset)
  + [`update()`](#update)
  + [`updateWith()`](#updatewith)
  + [`values()`](#values)
  + [`valuesIn()`](#valuesin) *&ast;TODO*
* [Seq](#seq)
  + [`_()`](#_)
  + [`chain()`](#chain) *&ast;TODO*
  + [`tap()`](#tap)
  + [`thru()`](#thru)
* [String](#string)
  + [`camelCase()`](#camelcase)
  + [`capitalize()`](#capitalize)
  + [`deburr()`](#deburr)
  + [`endsWith()`](#endswith)
  + [`escape()`](#escape)
  + [`escapeRegExp()`](#escaperegexp)
  + [`kebabCase()`](#kebabcase)
  + [`lowerCase()`](#lowercase)
  + [`lowerFirst()`](#lowerfirst)
  + [`pad()`](#pad)
  + [`padEnd()`](#padend)
  + [`padStart()`](#padstart)
  + [`parseInt()`](#parseint)
  + [`repeat()`](#repeat)
  + [`replace()`](#replace)
  + [`snakeCase()`](#snakecase)
  + [`split()`](#split)
  + [`startCase()`](#startcase)
  + [`startsWith()`](#startswith)
  + [`template()`](#template)
  + [`toLower()`](#tolower)
  + [`toUpper()`](#toupper)
  + [`trim()`](#trim)
  + [`trimEnd()`](#trimend)
  + [`trimStart()`](#trimstart)
  + [`truncate()`](#truncate)
  + [`unescape()`](#unescape)
  + [`upperCase()`](#uppercase)
  + [`upperFirst()`](#upperfirst)
  + [`words()`](#words)
* [Util](#util)
  + [`attempt()`](#attempt)
  + [`bindAll()`](#bindall) *&ast;TODO*
  + [`cond()`](#cond) *&ast;TODO*
  + [`conforms()`](#conforms) *&ast;TODO*
  + [`constant()`](#constant)
  + [`defaultTo()`](#defaultTo)
  + [`flow()`](#flow) *&ast;TODO*
  + [`flowRight()`](#flowright) *&ast;TODO*
  + [`hint`](#hint)
  + [`identity()`](#identity)
  + [`iteratee()`](#iteratee)
  + [`matches()`](#matches)
  + [`matchesProperty()`](#matchesproperty)
  + [`method()`](#method) *&ast;TODO*
  + [`methodOf()`](#methodof) *&ast;TODO*
  + [`mixin()`](#mixin)
  + [`noConflict()`](#noconflict)
  + [`noop()`](#noop)
  + [`nthArg()`](#ntharg)
  + [`over()`](#over) *&ast;TODO*
  + [`overEvery()`](#overevery) *&ast;TODO*
  + [`overSome()`](#oversome) *&ast;TODO*
  + [`property()`](#property)
  + [`propertyOf()`](#propertyof)
  + [`range()`](#range)
  + [`rangeRight()`](#rangeright)
  + [`runInContext()`](#runincontext)
  + [`stubArray()`](#stubarray)
  + [`stubFalse()`](#stubfalse)
  + [`stubImmutableIndexedSeq()`](#stubimmutableindexedseq)
  + [`stubImmutableIterable()`](#stubimmutableiterable)
  + [`stubImmutableKeyedSeq()`](#stubimmutablekeyedseq)
  + [`stubImmutableList()`](#stubimmutablelist)
  + [`stubImmutableMap()`](#stubimmutablemap)
  + [`stubImmutableOrderedMap()`](#stubimmutableorderedmap)
  + [`stubImmutableOrderedSet()`](#stubimmutableorderedset)
  + [`stubImmutableSeq()`](#stubimmutableseq)
  + [`stubImmutableSet()`](#stubimmutableset)
  + [`stubImmutableSetSeq()`](#stubimmutablesetseq)
  + [`stubImmutableStack()`](#stubimmutablestack)
  + [`stubObject()`](#stubobject)
  + [`stubString()`](#stubstring)
  + [`stubTrue()`](#stubtrue)
  + [`sym()`](#sym)
  + [`symbol()`](#symbol)
  + [`times()`](#times)
  + [`toPath()`](#topath) *&ast;TODO*
  + [`uniqueId()`](#uniqueid)
  + [`times()`](#times)


## Array and Immutable.List

### `chunk()`

```js
chunk(
  data: Array | List,
  size: number
): Array | List
```

Creates an array or list of elements split into groups the length of `size`. If `data` can't be split evenly, the final chunk will be the remaining elements.


### `difference()`

```js
difference(
  data: Array | List,
  ...values: Array<Array | List>
): Array | List
```

Creates an Indexed instance of values not included in the other given Indexed instances using SameValueZeroOrImmutableEqual for equality comparisons. The order and references of result values are determined by the first Indexed instance.


### `differenceBy()`

```js
differenceBy(
  data: Array | List,
  ...values: Array<Array | List>,
  iteratee=_.identity: (
    value: any
  ) => any
): Array | List
```

This method is like [`difference`](#difference) except that it accepts `iteratee` which is invoked for each element of `data` and `values` to generate the criterion by which they're compared. The order and references of result values are determined by the first Indexed instance.


### `differenceWith()`

```js
differenceWith(
  data: Array | List,
  ...values: Array<Array | List>,
  comparator=_.identity: (
    dataValue: any,
    otherValue: any
  ) => boolean
): Array | List
```

This method is like [`difference`](#difference) except that it accepts `comparator` which is invoked to compare elements of `data` to `values`. The order and references of result values are determined by the first Indexed instance.


### `drop()`

```js
drop(
  data: Array | Immutable.List,
  n: number
): Array | Immutable.List
```

Creates an slice of `data` with `n` elements dropped from the beginning.


### `dropRight()`

```js
dropRight(
  data: Array | Immutable.List,
  n: number
): Array | Immutable.List
```

Creates an slice of `data` excluding `n` elements dropped from the end.


### `dropRightWhile()`

```js
dropRightWhile(
  data: Array | List,
  predicate: (
    value: any,
    index: number,
    data: Array | Immutable.List
  ) => any
): Array | Immutable.List
```

Creates a slice of `data` excluding elements dropped from the end.
Elements are dropped until `predicate` returns falsey.


### `dropWhile()`

```js
dropWhile(
  data: Array | List,
  predicate: (
    value: any,
    index: number,
    data: Array | Immutable.List
  ) => any
): Array | Immutable.List
```

Creates a slice of `data` excluding elements dropped from the beginning.
Elements are dropped until `predicate` returns falsey.


## Collection and Immutable.Iterable

### `find()`

```js
find(
  data: Array | Immutable.Iterable | Object,
  ?predicate=_.identity: (
    value: any,
    key: string | number,
    collection: Array | Immutable.Iterable | Object
  ) => boolean,
  ?fromIndex=0: number
): any
```

Iterates over elements of collection, returning the first element predicate returns truthy for.


### `forEach()`

```js
forEach(
  data: Array | Immutable.Iterable | Object,
  ?iteratee=_.identity: (
    value: any,
    key: string | number,
    data: Array | Immutable.Iterable | Object
  ) => boolean
): Array | Immutable.Iterable | Object
```

Iterates over elements of `data` and invokes `iteratee` for each element. Iteratee functions may exit iteration early by explicitly returning `false`.


### `forEachRight()`

```js
forEachRight(
  data: Array | Immutable.Iterable | Object,
  ?iteratee=_.identity: (
    value: any,
    key: string | number,
    data: Array | Immutable.Iterable | Object
  ) => boolean
): Array | Immutable.Iterable | Object
```

This method is like [`forEach`](#foreach) except that it iterates over elements of `data` from right to left.


### `includes()`

```js
includes(
  data: Array | Immutable.Iterable | Object | String,
  value: any,
  ?fromIndex=0: number
): boolean
```

Checks if `value` is in `data`. If `data` is a string, it's checked for a substring of value, otherwise SameValueZeroOrImmutableEqual is used for equality comparisons. If fromIndex is negative, it's used as the offset from the end of collection.


### `includesWith()`

```js
includes(
  data: Array | Immutable.Iterable | Object | String,
  value: any,
  comparator: (
    dataValue: any,
    value: any
  ) => boolean,
  ?fromIndex=0: number
): boolean
```

This method is like [`includes`](#includes) except that it accepts comparator which is invoked to compare elements of the data to the value.


### `slice()`

```js
slice(

): Array | Immutable.Iterable | Object
```

Creates a slice of an Indexed value from start up to, but not including, end.

If the requested slice is equivalent to the current Indexed, then it will return itself.


## Function

### `compose()`

```js
compose(
  ...functions: Array<any => any>
): (...args:any) => any
```

Used to compose multiple functions together in to a single function


## Lang

### `eq()`

```js
eq(
  value: any,
  other: any
): boolean
```

**This method is curried**

Returns `true` if `value` is equal to `other`. Otherwise `false`.


### `gt()`

```js
gt(
  value: any,
  other: any
): boolean
```

**This method is curried**

Returns `true` if `value` is greater than `other`. Otherwise `false`.


### `gte()`

```js
gte(
  value: any,
  other: any
): boolean
```

**This method is curried**

Returns `true` if `value` is greater than or equal to `other`. Otherwise `false`.


### `isArray()`

```js
isArray(
  data: any
): boolean
```

Returns `true` if value is an `Array`. Otherwise `false`.


### `isArrayLike()`

```js
isArrayLike(
  data: any
): boolean
```

Returns `true` if value is array-like. Otherwise `false`.

A value is considered array-like if it's not a function and has a `value.length` that's an integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.


### `isBoolean()`

```js
isBoolean(
  data: any
): boolean
```

Returns `true` if value is classified as a boolean primitive or object. Otherwise `false`.


### `isFunction()`

```js
isFunction(
  data: any
): boolean
```

Returns `true` if data is classified as a function. Otherwise `false`.


### `isImmutable()`

*aliases:* `isIm`

```js
isImmutable(
  data: any
): boolean
```

Returns `true` if data is an immutable data type from immutable js. Otherwise `false`.


### `isImmutableIndexedSeq()`

*aliases:* `isImIndexedSeq`

```js
isImmutableIndexedSeq(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Seq.Indexed`][Immutable.Seq.Indexed]. Otherwise `false`.


### `isImmutableIterable()`

*aliases:* `isImIterable`

```js
isImmutableIterable(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Iterable`][Immutable.Iterable]. Otherwise `false`.


### `isImmutableKeyedSeq()`

*aliases:* `isImKeyedSeq`

```js
isImmutableKeyedSeq(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Seq.Keyed`][Immutable.Seq.Keyed]. Otherwise `false`.


### `isImmutableList()`

*aliases:* `isImList`

```js
isImmutableList(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.List`][Immutable.List]. Otherwise `false`.


### `isImmutableMap()`

*aliases:* `isImMap`

```js
isImmutableMap(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Map`][Immutable.Map]. Otherwise `false`.


### `isImmutableOrderedMap()`

*aliases:* `isImOrderedMap`

```js
isImmutableOrderedMap(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.OrderedMap`][Immutable.OrderedMap]. Otherwise `false`.


### `isImmutableOrderedSet()`

*aliases:* `isImOrderedSet`

```js
isImmutableOrderedSet(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.OrderedSet`][Immutable.OrderedSet]. Otherwise `false`.


### `isImmutableSeq()`

*aliases:* `isImSeq`

```js
isImmutableSeq(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Seq`][Immutable.Seq]. Otherwise `false`.


### `isImmutableSet()`

*aliases:* `isImSet`

```js
isImmutableSet(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Set`][Immutable.Set]. Otherwise `false`.


### `isImmutableSetSeq()`

*aliases:* `isImSetSeq`

```js
isImmutableSetSeq(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Seq.Set`][Immutable.Seq.Set]. Otherwise `false`.


### `isImmutableStack()`

*aliases:* `isImStack`

```js
isImmutableStack(
  data: any
): boolean
```

Returns `true` if data is of type [`Immutable.Stack`][Immutable.Stack]. Otherwise `false`.


### `isLength()`

```js
isLength(
  data: any
): boolean
```

Returns `true` if value is a valid array-like length. Otherwise `false`.


### `isNil()`

```js
isNil(
  data: any
): boolean
```

Returns `true` if value is `null` or `undefined`. Otherwise `false`.


### `isNumber()`

```js
isNumber(
  data: any
): boolean
```

Returns `true` if value is classified as a `Number` primitive or object. Otherwise `false`.


### `isObject()`

```js
isObject(
  data: any
): boolean
```

Returns `true` if value is the language type of `Object`. Otherwise `false`.


### `isString()`

```js
isString(
  data: any
): boolean
```

Returns `true` if value is classified as a `String` primitive or object. Otherwise `false`.


### `isSymbol()`

```js
isSymbol(
  data: any
): boolean
```

Returns `true` if value is classified as a `Symbol` primitive or object. Otherwise `false`.


### `lt()`

```js
lt(
  value: any,
  other: any
): boolean
```

**This method is curried**

Returns `true` if `value` is less than `other`. Otherwise `false`.


### `lte()`

```js
lte(
  value: any,
  other: any
): boolean
```

**This method is curried**

Returns `true` if `value` is less than or equal to `other`. Otherwise `false`.


### `toFinite()`

```js
toFinite(
  data: any
): number
```

Converts value to a finite number.


### `toInteger()`

```js
toInteger(
  data: any
): number
```

Converts value to an integer.


### `toNumber()`

```js
toNumber(
  data: any
): number
```

Converts value to a number.


## Object and Immutable.Map

### `set()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
set(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  value: any
): Array | Immutable.List | Immutable.Map | Object
```

Sets the value at path of data. If a portion of path doesn't exist, it's created. When creating path, this method will preserve the parent data type. Therefore, Immutable instances will be created for Immutable parents and mutable Object/Array instances will be created for mutable parents. Arrays and Lists will be created for index properties while Objects and Maps are created for all other missing properties. Use [`setWith`](#setWith) to customize path creation.


### `setWith()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
setWith(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  value: any,
  ?customizer: (
    value: any,
    key: string,
    data: Array | Immutable.List | Immutable.Map | Object,
  ) => Array | Immutable.List | Immutable.Map | Object
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`set`](#set) except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead.


### `unset()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
unset(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string
): Array | Immutable.List | Immutable.Map | Object
```

Removes the property at path of data. This method returns a new instance.


### `update()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
update(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  updater: (value: any) => any
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`set`](#set) except that accepts updater to produce the value to set. Use [`updateWith`](#updateWith) to customize path creation. This method returns a new instance.


### `updateWith()`

**Note:** Unlike Lodash, this method is immutable and does NOT mutate data.

```js
updateWith(
  data: Array | Immutable.List | Immutable.Map | Object,
  path: string,
  updater: (value: any) => any,
  ?customizer: (
    value: any,
    key: string,
    data: Array | Immutable.List | Immutable.Map | Object,
  ) => Array | Immutable.List | Immutable.Map | Object
): Array | Immutable.List | Immutable.Map | Object
```

This method is like [`update`](#update) except that it accepts customizer which is invoked to produce the objects of path. If customizer returns undefined path creation is handled by the method instead. This method returns a new instance.


[Immutable.Iterable]: https://facebook.github.io/immutable-js/docs/#/Iterable
[Immutable.List]: https://facebook.github.io/immutable-js/docs/#/List
[Immutable.Map]: https://facebook.github.io/immutable-js/docs/#/Map
[Immutable.OrderedMap]: https://facebook.github.io/immutable-js/docs/#/OrderedMap
[Immutable.OrderedSet]: https://facebook.github.io/immutable-js/docs/#/OrderedSet
[Immutable.Seq]: https://facebook.github.io/immutable-js/docs/#/Seq
[Immutable.Seq.Indexed]: https://facebook.github.io/immutable-js/docs/#/Seq.Indexed
[Immutable.Seq.Keyed]: https://facebook.github.io/immutable-js/docs/#/Seq.Keyed
[Immutable.Seq.Set]: https://facebook.github.io/immutable-js/docs/#/Seq.Set
[Immutable.Set]: https://facebook.github.io/immutable-js/docs/#/Set
[Immutable.Stack]: https://facebook.github.io/immutable-js/docs/#/Stack
