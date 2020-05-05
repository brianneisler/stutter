# Type Identifier
The type identifier is responsible for analyzing a given data object and
determining its "type". Unlike classic types in a language, a type is simply
based on a an identifier and boolean function that accepts the given value and
returns true if the given value is of that "type"

## TypeIdentifier Model
```
{ 
  name: 'email',
  predicate: {
    functionId: Function.id,
    values:{
      v0: Regex.id
    },
    names: {}
  }
}
```
