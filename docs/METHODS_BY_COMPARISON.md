# Methods by comparison

## add

**clojure**
```clojure
(+ 1 2 3)   ; 6
```

**stutter**
```stutter
add:[1, 2, 3]      // 6
```


## if

**clojure**
```clojure
(if true
  "By Zeus's hammer!"
  "By Aquaman's trident!")
```

**stutter**
```stutter
if:[
  true
  "By Zeus's hammer!"
  "By Aquaman's trident!"
]
```


## print

**clojure**
```clojure
(print "foo")  ; > foo
```

**stutter**
In javascript this will fallback to `console.log` if `process.stdout.write` is not available
```stutter
print:["foo"]
```


## println

Same as print with a new line `\n` added to the end

**clojure**
```clojure
(println "foo")     ; > "foo\n"
```

**stutter**
In javascript this will fallback to `console.log` if `process.stdout.write` is not available
```stutter
println:["foo"]      # > 'foo\n'
```


## do

Evaluates multiple expressions and returns the last value. Returns `null` if not expressions are supplied.

**clojure**
```clojure
(do (print "Success!")
    "By Zeus's hammer!")
```

**stutter**
```stutter
do:[
  print:[
    "Success!"
  ]
  "By Zeus's hammer!"
]
```


## when

**clojure**
```clojure
(when true
  (println "Success!")
  "abra cadabra")
```

**stutter**
```stutter
when:[
  true
  println:[
    "Success!"
  ]
  "abra cadabra"
]
```


## nil

**clojure**
```clojure
nil         ; => nil
```

**stutter**
```stutter
nil         # => nil
{ _nil }
```

## is nil?
**clojure**
```clojure
(nil? 1)    ; => false
(nil? nil)  ; => true
```

**stutter**
```stutter
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
$.eq(1, 1)   // => true
eq(1, 1)    // true

$(eq, null, null)   // => true
$.eq(null, null)     // => true
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
$.or(null, null)    // => null
$.or(false, null)   // => null
$.or(true, nil)     // => true

// or doesn't evaluate if the first value is true
$.or(true, $println("foo"))   // => true

// order matters
$.or($.println("foo"), true)   // => > 'foo' true

// does not coerce a given value to a boolean true, returns the value
$.or(false, 42)        // => 42
$.or(false, 42, 9999)  // => 42
$.or(42, 9999)         // => 42
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
$(and, true, true)  // => true
$.and(true, true)   // => true
and(true, true)     // true

$(and, true, false) // => false
$.and(true, false)  // => false
and(true, false)    // false

$(and, null, false) // => null
$.and(null, false)  // => null
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
$(def, 'myVal', 5)
$.def('myVal', 5)
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
  $.assoc('.hairColor', 'gray'),
  $.update('.age', inc))

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
last._(range(10))
  .filter(odd)
  .map(pow(_, 2))

_(person,
  assoc('.hairColor', 'gray'),
  update('.age', inc))

$._(person,
  assoc('.hairColor', 'gray'),
  update('.age', inc))
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
