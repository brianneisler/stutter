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

- Supports both data first AND function first (lodash style and ramda style)
  - We're able to do this because stutter supports multi-functions.
    Multi-functions in stutter are matched based upon parameter types.
- Built on top of [Immutable.JS](https://facebook.github.io/immutable-js/) data
  structures but supports both Immutable.JS data types and standard JS values.
- Introduces custom data types for [Immutable.JS](https://facebook.github.io/immutable-js/)
- Converts types based on data hinting
  - If a deep operation is performed on an immutable data type that generates a
    new "object" then that object will be an ImmutableMap
- Supports mixed nested data types making it easier to process values of mixed Immutable.JS/mutable data objects
- All functions are fully immutable and side-effect free (for both standard JS values and Immutable.JS data types)
- All functions are automatically curried.
  - Automatic currying works for all forms 


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
