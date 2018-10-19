# Guide

Stutter is built on top of javascript. It uses javascript to evaluate and execute your stutter code.


## Just Functions

Stutter is simple. It is composed entirely of functions. You can write entire applications using just functions chained together in the right ways.

```js
import { add, div, mul } from 'stutter'

add(
  div(4, 2),
  mul(3, 2))  // 8
```


## Concepts

Stutter makes use of a few simple concepts to yield ultimate power!

- [Lazy Evaluation](#lazy-evaluation)
- [Recomposable Chaining](#recomposable-chaining)
- [Immutability]

### Lazy Evaluation


### Recomposable Chaining

Every stutter function can be chained together to give you the flavor of functional javascript that you want.

```js
fn1.fn2.fn3('a', 'b', 'c')

// is the same as...
const fn1 = (fn) => (...args) => fn(...args)
const fn2 = (fn) => (...args) => fn(...args)
const fn3 = (arg1, arg2, arg3) => {
  arg1  // 'a'
  arg2  // 'b'
  arg3  // 'c'
}
fn1(fn2(fn3))('a', 'b', 'c')
```




## Curried Functions
```js
import { curry } from 'stutter'

const add2 = curry.add(2)
add2(3) // 5
```

##

## Thread
```js
import { _ } from 'stutter'

_.set({}, '.foo', 'bar'))  // { foo: 'bar' }
```
- Lazy evaluated form
```js
import { $ } from 'stutter'

$.set({}, '.foo', 'bar'))  // { foo: 'bar' }
```

Data last is useful for composability

```js
import { set } from 'stutter'

set('.foo', 'bar', {}))  // { foo: 'bar' }

const setFooBar = set('.foo', 'bar') // curried function
setFooBar({}) // { foo: 'bar' }

const setBarBaz = set('.bar', 'baz')

const composed = compose)

```



### Generators, Async and Standard Functions

Stutter supports all forms of functions and uses them in conjunction to create powerful flexible concepts.

```js
import { add } from 'stutter'

add(1, 2, 3)  // 6
```




## let
```js
_let(({}))
```


## eval

**stutter**
```js
const form = $(add, 1, 2)
eval(form)  // 3
```

```js
eval(
  $.add(1, 2),
  $.mul(2, 3)
)
// 3
// 6
```
