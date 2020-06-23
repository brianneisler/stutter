# Guide

Stutter is built with Javascript in mind but is heavily inspired by Clojure.
Stutter aims to make functional programming easier by introducing support for functional
concepts while still maintaining direct compatibility with native javascript.


## Concepts

There are some conceptual differences that you should be aware of while working
with `stutter`


### Properties vs Keys vs Indexes

Properties and Keys are two different concepts within stutter. Often these are
conflated in some other libraries. We have separated them out to help keep
things consistent and to more easily reason about the two concepts.


#### Properties

JavaScript is designed on a simple object-based paradigm. An object is a
collection of properties, and a property is an association between a name and a
value.

These are easily accessed using the dot or bracket notation in Javascript

```js
const object = {
  foo: 'bar'
}

// foo is the property
object.foo 
//=> 'bar'
object['foo']
```

In Javascript, all properties are strings. Even when accessing a property using
a non string value, the value is first cast as a string before accessing the
property's value.

```js
const object = {
  '1': 'a'
}
object[1]
//=> 'a'
```

The above example works because the number is first typecast to a string before
accessing the value.

When using property based methods in stutter (such as [`getProperty`](./API.md#getProperty)),
we consider only strings to be Properties.

#### Keys

Keys in javascript are used by such data structures as Map and WeakMap for
storing and accessing values using the given Key. These are different from 


#### Piks

Properties, keys and indexes are commonly used in javascript for storing and accessing
values. It is also common to iterate over these values. For this reason, we have
introduced 

### Falsy and Truthy Values

In javascript the following values are `false`
```js
false
null
undefined
''
0
NaN
```

When performing falsy checks in `stutter` the following Javascript values are considered
`false`

```js
false
null
undefined
NaN
```


### Default return value from Fn is `Null`





TODO BRN: Move this section into the METHODS_BY_COMPARISON.md file

## Methods by comparison

## add

**javascript**
```js
1 + 2 + 3
// => 6
```

**clojure**
```clojure
(+ 1 2 3)   
;; => 6
```

**stutter**
```js
add(1, 2, 3)     
// => 6
```


## if

**javascript**
```js
if (true) {
  return "By Zeus's hammer!"
} else {
  return "By Aquaman's trident!"
}
;; => "By Zeus's hammer!"
```

**clojure**
```clojure
(if true
  "By Zeus's hammer!"
  "By Aquaman's trident!")
;; => "By Zeus's hammer!"
```

**stutter**
```js
import $ from 'stutter'

$.if(true,
  "By Zeus's hammer!",
  "By Aquaman's trident!")
```


## print

Prints a value to standard out.

**javascript**
```js
process.stdout.write('foo')  
// => 'foo'
```

**clojure**
```clojure
(print "foo")  
; > foo
```

**stutter**
In javascript this will fallback to `console.log` if `process.stdout.write` is not available
```js
print('foo')
```


## println

Same as print with a new line `\n` added to the end

**clojure**
```clojure
(println "foo")     
; > "foo"
```

**stutter**
In javascript this will fallback to `console.log` if `process.stdout.write` is not available
```js
println("foo")      
// > 'foo\n'
```


## do

Evaluates multiple expressions and returns the last value. Returns `null` if no expressions are supplied.

**clojure**
```clojure
(do (print "Success!")
    "By Zeus's hammer!")
```

**stutter**
```js
$.do($(print, "Success!")
  "By Zeus's hammer!")

```


## when

**clojure**
```clojure
(when true
  (println "Success!")
  "abra cadabra")
```

**stutter**
```js
when(true,
  $(println, "Success!"),
  "abra cadabra")
```


## nil

**clojure**
```clojure
(nil? 1)    ; => false

(nil? nil)  ; => true
```

**stutter**
```js
$(nil, 1)   // => false
$nil(1)     // => false
nil(1)      // false

$(nil, null)  // => true
$nil(null)    // => true
nil(null)     // true  

$(nil, undefined)   // => true
$nil(undefined)     // => true
nil(undefined)      // true
```


## eq

Equality operator

**clojure**
```clojure
(= 1 1)     ; => true

(= nil nil) ; => true

(= 1 2)     ; => false
```

**stutter**
```js
$(eq, 1, 1) // => true
$eq(1, 1)   // => true
eq(1, 1)    // true

$(eq, null, null)   // => true
$eq(null, null)     // => true
eq(null, null)      // true

$(eq, 1, 2)  // => false
$eq(1, 2)    // => false
eq(1, 2)     // false
```


## or

Evaluates expressions one at a time, from left to right. Returns the first value that evaluates to a logical true value, otherwise it returns the value of the last expression. If no expressions exist it returns `null`. Expressions after the first `true` are not evaluated. Expressions are not coerced to a boolean, instead their value is returned.

**clojure**
```clojure
(or nil nil)    ; nil
(or false nil)  ; nil
(or true nil)   ; true

;; or doesn't evaluate if the first value is true
(or true (println "foo"))   ; true

;; order matters
(or (println "foo") true)   ; 'foo'  true

;; does not coerce a given value to a boolean true, returns the value
(or false 42)       ; 42
(or false 42 9999)  ; 42
(or 42 9999)        ; 42
```

**stutter**
```js
or(null, null)    // => null
or(false, null)   // => null
or(true, nil)     // => true

// or doesn't evaluate if the first value is true
or(true, println("foo"))   // => true

// order matters
or(println("foo"), true)   // => > 'foo' true

// does not coerce a given value to a boolean true, returns the value
or(false, 42)        // => 42
or(false, 42, 9999)  // => 42
or(42, 9999)         // => 42
```


## and

Evaluates expressions one at a time, from left to right. Returns the first value that evaluates to a logical `false` value, otherwise it returns the value of the last expression. If no expressions exist it returns `null`. Expressions after the first `false` are not evaluated. Expressions are not coerced to a boolean, instead their value is returned.


**clojure**
```clojure
(and true true)   ; true

(and true false)  ; false

(and null false)  ; null
```

**stutter**
```js
and(true, true)     // true

and(true, false)    // false

and(null, false)    // null
```


## def

Creates a global var in the current namespace with the given name.

**clojure**
```clojure
(def myVal 5)
```

**stutter**
```js
def('myVal', 5)
```


## Threading

Thread first macro

**clojure**
```clojure
(-> person
    (assoc :hair-color :gray)
    (update :age inc))
```

**stutter**
```js
_(person)
  .assoc('.hairColor', 'gray')
  .update('.age', inc)

_(person,
  assoc('.hairColor', 'gray'),
  update('.age', inc))

$._(person,
  assoc('.hairColor', 'gray'),
  update('.age', inc))
```


Thread last macro

**clojure**
```clojure
(->> (range 10)
        (filter odd?)
        (map #(* % %))
        (reduce +)))
```

**stutter**
```js
_last(range(10)
  .filter(odd)
  map(pow(_, 2))
```

NOTE: Thread gets run before every invocation of the next function

**clojure**
```clojure
(as-> [:foo :bar] v
  (map name v)
  (first v)
  (.substring v 1))
```

**stutter**
```js
stutter.as()._()
```
