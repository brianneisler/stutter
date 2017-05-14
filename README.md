# stutter
Functional library built for [Immutable.JS](https://facebook.github.io/immutable-js/)


## Benefits
- Supports both Immutable.JS data types and standard JS values
- Introduces custom data types for Immutable.js
- Converts types based on data hinting
- Supports mixed nested data types making it easier to process values of mixed Immutable.JS/mutable data objects
- All functions have been written to be fully immutable and side-effect free (for both standard JS values and Immutable.JS data types)
- All functions are automatically curried.
- Parameters are arranged for convenient currying (data last parameter ordering).


## Build Status

[![npm version](https://badge.fury.io/js/stutter.svg)](https://badge.fury.io/js/stutter)<br />
[![Build Status](https://travis-ci.org/brianneisler/stutter.svg)](https://travis-ci.org/brianneisler/stutter)<br />
[![NPM](https://nodei.co/npm/stutter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stutter/)


## Documentation

[Full API documentation](docs/API.md) - Learn about each method


## Install

```js
npm install --save stutter
```


## Usage

```js
import { set } from 'stutter'
import Immutable from 'immutable'

// Immutable.JS example
const map = Immutable.Map({ a:1, b:2 })
set('c', 3, map)    // returns Map { "a": 1, "b": 2, "c": 3 }
set('c', 3)(map)   // returns Map { "a": 1, "b": 2, "c": 3 }


// Standard JS Object example
const obj = { a:1, b:2 }
set('c', 3, obj)    // returns { "a": 1, "b": 2, "c": 3 }
set('c', 3)(obj)   // returns { "a": 1, "b": 2, "c": 3 }
```
