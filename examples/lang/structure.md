# Lang Structure


## Example

**Film.$**
```js
ns:types:[
  import:{
    core:[ String Number ]
  }
]

deftype:[ Film:{
  name:String
  year:Number   
}]
```

**logic**
```js
[
  {
    i:'i0', o:':', v:{
      i:'i1', o:':', v:[
        {
          i:'i2', o:':', v:{
            k0: {
              i:'i3', o:':', v: [
                { i:'i4' },
                { i:'i5' }
              ]
            }
          }
        }
      ]
    }
  },
  {
    i:'i6', o:':', v:[
      {
        i:'i7', o:':', v:{
          k1: {
            i:'i8', o:':', v: { i:'i4' }
          },
          k2: {
            i:'i9', o:':', v: { i:'i5' }
          }
        }
      }
    ]
  }
]
```

**identifiers**
```js
{
  i0: 'r0',
  i1: 'film',
  i2: 'Film',
  i3: 'name'
}
```

**refs**
```js
{
  r0: <ns_uuid@context>,
  r1: <let_uuid@context>,

}
```

**values**
```js
{
  v0:'Aliens',
  v1:1983,
  v2:'War Games'
}
```

**id to names**
```js
{
  'fn:let': 'let'
}
```














```
defn:[ setName:{ film:Film name:String }
  assoc:[film .name name ]
]

let:[ { film:Film:{ name:"Aliens" year:1983 } }
  film
    ->setName:{ film name:"War Games" }:{ year }
    ->log: // logs { year: 1983 }
]
```

**logic**
```js
[
  { i:'i0'}
  { i:'i0', o:':', v:[
    {
      i:'i1', o:':', v:{
        i:'i2', o:':', v:{
          k0: { i:'i3' }
        }
      }
    }
  ] }
]
```

**identifiers**
```js
{
  i0: 'r0',
  i1: 'film',
  i2: 'Film',
  i3: 'name'
}
```

**refs**
```js
{
  r0: <deftype_uuid@context>,
  r1: <let_uuid@context>,

}
```

**values**
```js
{
  v0:'Aliens',
  v1:1983,
  v2:'War Games'
}
```

**names**
```js
{
  'fn:let': 'let'
}
```
