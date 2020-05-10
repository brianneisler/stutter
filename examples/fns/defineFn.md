# Define an Fn

This form defines an Fn in the data type but has not yet been interpreted.

This form is raw stutter data models which is the most performant way of writing
thtis code.
```js
import { defn, interpret, multiply } from 'stutter'

[defn, 'multiply3', [{ a: Number }, { b: Number }, { c: Number }], 
  [multiply 
    [multiply, $('a'), $.b], 
    $.c]]
```

To intepret the function we use the `interpret` method from stutter. The result
is a multiply3 function that can be executed.
```js
import { interpret } from 'stutter'

const multiply3 = interpret(
  [defn, 'multiply3', [{ a: Number }, { b: Number }, { c: Number }], 
  [mul 
    [mul, $.a, $.b], 
    $.c]]
)
```



Define a function that has one parameter with no type
```js
[defn, 'inc', [$.a], 
  // Reference the symbol in code
  [add, $.a, 1]]
```

Define a function that has one parameter with a type
```js
[defn, 'inc', [$.a(Number)], 
  [add, $.a, 1]]
```

Define a function that accepts an `Object` and expands it. In this case we expect
an `Object` that as a property `a` which is a `Number`
```js
[defn, 'incA', [{ a: Number }], 
  [add, $.a, 1]]
```

For no type, simply use the `Any` type 
```js
[defn, 'incA', [{ a: Any }], 
  [add, $.a, 1]]
```

To rename the symbol for the prop 
```js
[defn, 'incA', [{ a: $.b }], 
  [add, $.b, 1]]
```

To apply a type to the renamed symbol for the prop 
```js
[defn, 'incA', [{ a: $.b(Number) }], 
  [add, $.b, 1]]
```

Define a function that accepts an `Array` and expands it. In this case we expect
an `Array` that as a value at index `0` which we will name `$.a` 
```js
[defn, 'incA', [[$.a]], 
  [add, $.a, 1]]
```



Define a function that has one parameter with no type
```js
[defn, 'func', [{ a: Number }, { b: Number }, { c: Number }], 
  [multiply 
    [multiply, $('a'), $.b], 
    $.c]]
```





