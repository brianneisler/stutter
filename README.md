# stutter
Functional language built on Javascript

## Build Status

[![npm version](https://badge.fury.io/js/stutter.svg)](https://badge.fury.io/js/stutter)<br />
[![Build Status](https://travis-ci.org/brianneisler/stutter.svg)](https://travis-ci.org/brianneisler/stutter)<br />
[![NPM](https://nodei.co/npm/stutter.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/stutter/)


## Install

```js
npm install -g stutter
```

## Usage

### running a program
```bash
stutter path/to/file.js
```

### starting REPL
```bash
stutter
```

## Code Example
```js
ns('lang',
  log('"Hello World!'))
```

## Code Parts
- Strings are identifiers
- all keywords are simple functions
- Actual strings are of the format '"my string' with a leading double quote "
