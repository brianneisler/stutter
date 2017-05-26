# stutter
Functional programming framework built for Javascript


## Benefits
- Built on top of [Immutable.JS](https://facebook.github.io/immutable-js/) data structures but supports both Immutable.JS data types and standard JS values.
- Introduces custom data types for [Immutable.JS](https://facebook.github.io/immutable-js/)
- Converts types based on data hinting
- Supports mixed nested data types making it easier to process values of mixed Immutable.JS/mutable data objects
- All functions are fully immutable and side-effect free (for both standard JS values and Immutable.JS data types)
- All functions are automatically curried.
- stutter is data first to make it easier to reason about.

## Build Status

[![npm version](https://badge.fury.io/js/stutter.svg)](https://badge.fury.io/js/stutter)<br />
[![Build Status](https://travis-ci.org/brianneisler/stutter.svg)](https://travis-ci.org/brianneisler/stutter)<br />
[![NPM](https://nodei.co/npm/stutter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stutter/)


## Documentation
[Guide](docs/GUIDE.md) - A guide to getting started and using stutter
[Full API documentation](docs/API.md) - Learn about each method


## Install

```js
npm install --save stutter
```


## Usage

```js
import { _, set } from 'stutter'
import Immutable from 'immutable'

// Immutable.JS example
const map = Immutable.Map({ a:1, b:2 })
set(map, 'c', 3)    // returns Map { "a": 1, "b": 2, "c": 3 }
set(map, 'c')(3)    

// Threading data first example
_.set('c', 3)(map)  // returns Map { "a": 1, "b": 2, "c": 3 }
_(map, set('c', 3)) // returns Map { "a": 1, "b": 2, "c": 3 }
_(map).set('c', 3)  // returns Map { "a": 1, "b": 2, "c": 3 }

// Standard JS Object example
const obj = { a:1, b:2 }
set('c', 3, obj)    // returns { "a": 1, "b": 2, "c": 3 }
```
