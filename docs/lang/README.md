# stutter language

## Parts of a Language

### Syntax

```js
deftype:[ Film:{
  name:String
  year:Number   
}]

defn:[ setName:{ film:Film name:String }
  assoc:[film .name name ]
]

let:[ { film:Film:{ name:"Aliens" year:1983 } }
  film
    ->setName:{ film name:"War Games" }:{ year }
    ->log: // logs { year: 1983 }
]

```

###




### Language Storage

The language is then stored as a graph as code is committed enabling the understanding of changes to the language.

### Separation of Naming and Logic

The stutter language separates the concepts of naming from actual logic structure. This enables the representation of business logic at its most fundamental level. By separating the naming scheme from the actual logic we can identify code that is logically the same even though it uses different names.

**Example**
The following two pieces of code are equivalent.

```js
defn:[ add2:[ value ]
  add:[ value, 2 ]
]
```

```js
defn:[ plus2:[ num ]
  add:[ num, 2 ]
]
```
