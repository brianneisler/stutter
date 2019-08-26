```
            $$\                 $$\     $$\                         
            $$ |                $$ |    $$ |                        
 $$$$$$$\ $$$$$$\   $$\   $$\ $$$$$$\ $$$$$$\    $$$$$$\   $$$$$$\  
$$  _____|\_$$  _|  $$ |  $$ |\_$$  _|\_$$  _|  $$  __$$\ $$  __$$\ 
\$$$$$$\    $$ |    $$ |  $$ |  $$ |    $$ |    $$$$$$$$ |$$ |  \__|
 \____$$\   $$ |$$\ $$ |  $$ |  $$ |$$\ $$ |$$\ $$   ____|$$ |      
$$$$$$$  |  \$$$$  |\$$$$$$  |  \$$$$  |\$$$$  |\$$$$$$$\ $$ |      
\_______/    \____/  \______/    \____/  \____/  \_______|\__|      
```


Functional programming framework built for Javascript



[Website](https://stutter.io) •


## Why?

We're big fans of both lodash and ramda. But after years of use there are
particular sets of problems that we wanted solutions to.
- Autocurrying is a pitfall without helpful guiderails
- Sometimes you want data first, sometimes you want function first. There's use
  cases for both!
- Why is support for promises not built in? Do I really need yet another library
  (`async`)?
- How come I can't use these functions with generators?
- Why do I need separate functions for sync and async?
- When using curried functions, it's impossible to tell where in my code an
  error really came from.
- Why don't I get an meaningful error when I accidentally feed the wrong type to
  a function.


## Features

### Supports async AND generator functions

We believe you shouldn't have to use different `map` functions when you're
mapping using an async function, generator function or a standard function. The
method should be able to naturally upgrade to match the requirements based upon
the iteratee function that YOU give it. That's why our functions will support
any of these options and return you the appropriate matching type. This makes
stutter compatible for use with such libraries as `redux-saga` 

**Standard function will run synchronously**
```js
import { map } from 'stutter'

map([1, 2, 3], (value) => value + 1)
//=> [2, 3, 4]
```

**Async functions will upgrade and return a Promise**
```js
const result = await map([1, 2, 3], async (value) => value + 1)
//=> [2, 3, 4]
```

**Generator functions will upgrade and return a Generator**
```js
const result = yield* map([1, 2, 3], function* (value) {
  return value + 1
})
//=> [2, 3, 4]
```


### Data first AND function first

Stutter supports both data first AND function first (lodash style and ramda
style. We're able to do this because stutter supports multi-functions.
Multi-functions in stutter are matched based upon parameter types which means it
can tell when you've put the function first and when you've put the data first.

**function first**
```js
import { reduce } from 'stutter'

reduce(
  (accum, value) => accum + value,
  0,
  [1, 2, 3]
)
// => 6
```

**data first**
```js
import { reduce } from 'stutter'

reduce(
  [1, 2, 3],
  0,
  (accum, value) => accum + value
)
// => 6
```

### All operations are Immutable

Built on top of [Immutable.JS](https://facebook.github.io/immutable-js/) data
  structures but supports both Immutable.JS data types and standard JS values
  (including Map, WeakMap, Set and WeakSet).
- Introduces custom data types for
  [Immutable.JS](https://facebook.github.io/immutable-js/)



### 

### Contagion support

Types are contagious across deep operations. When a deep operation is performed
on a value that generates a new value, that new value will be of the same or similar
"type". For instance, if you do a deep `assocIn` to an `ImmutableMap` the newly
generated nested object will be an ImmutableMap

```js
import { assocIn } from 'stutter'
import Immutable from 'immutable'

assocIn(Immutable.Map({}), ['foo', 'bar'], 'baz')
//=> ImmutableMap { foo : ImmutableMap { bar: 'baz' }}

assocIn(Map(), ['foo', 'bar'], 'baz')
//=> Map { foo : Map { bar: 'baz' }}

assocIn({}, ['foo', 'bar'], 'baz')
//=> Object { foo : Object { bar: 'baz' }}
```

### Protocols

Having a library with built in support for common data types like native JS
types is great. However, there are times you want to extend the type of data
that a function can support without having to write your own and then replace all
of the uses of that function. Using Protocols you can easily teach `stutter` how
to deal with new types of data.


### Type support

Stutter's methods are capable of accepting type defintitions so that it knows
what kind of data a function is meant to handle. 
- Alerts you to problems when wrong type of data is encountered or when a matching
  type signature cannot be found
- Makes it easy to  mixed nested data types making it easier to process values of mixed Immutable.JS/mutable data objects



### Auto curried with type hinting
- All functions are automatically curried.
  - Automatic currying works for all forms of a multi-function


## Project Status

[![npm version](https://badge.fury.io/js/stutter.svg)](https://badge.fury.io/js/stutter)<br />
[![Build Status](https://travis-ci.org/brianneisler/stutter.svg)](https://travis-ci.org/brianneisler/stutter)<br />
[![NPM](https://nodei.co/npm/stutter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stutter/)


## Documentation

[Guide](docs/GUIDE.md) - A guide to getting started and using stutter
[Full API documentation](docs/API.md) - Learn about each method


## Install

```sh
npm install --save stutter
```


## Usage

Simply import the functions you want to use into your project.
```js
import { map, set } from 'stutter'
```

## Examples

Supports both Immutable.js and standard data types
```js
import { set } from 'stutter'
import Immutable from 'immutable'

// Immutable.JS example
const map = Immutable.Map({ a:1, b:2 })

set(map, 'c', 3)    
//=> Map { "a": 1, "b": 2, "c": 3 }

// Standard JS Object example
const obj = { a:1, b:2 }

set('c', 3, obj)    
//=> { "a": 1, "b": 2, "c": 3 }
```


Built in threading (piping) macros
```js
const obj = { a:1, b:2 }
_.set('c', 3)(obj)  
//=> Object { "a": 1, "b": 2, "c": 3 }

_(obj, set('c', 3)) 
//=> Object { "a": 1, "b": 2, "c": 3 }

_(obj).set('c', 3)  
//=> Object { "a": 1, "b": 2, "c": 3 }
```


`function (arg1) {
      const exception = (0, _buildException.default)(source).expected.arg(arg1, 0).toMatchParameter(source.parameters[0]);
      expect(exception).toBeInstanceOf(_Exception.default);
      expect(exception).toMatchObject({
        source,
        target: {
          type: 'Argument',
          index: 0,
          value: 'foo'
        },
        expected: {
          expectation: 'toMatchParameter',
          data: {
            parameter: source.parameters[0]
          }
        },
        code: 'Expected:Argument:toMatchParameter'
      });
    }`
