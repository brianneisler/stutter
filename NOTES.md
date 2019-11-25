# protocols
Protocol type definitions for methods must be the same as the actual
implementation defined in a Type. Otherwise it complicates the dispatching logic
since every implementations signature needs to be checked instead of simply
checking the protocol's signature.

Protocols will need support for multi function signatures so that they can
support multiple orderings of arguments.



# base functions
Base functions are a javascript function with meta data attached. 

A base function looks like this...
```js
definitionToBaseFunction(func, meta)
//=> () => {
//   {
//     @@meta: {
//       parameters: [Type],
//       returns: Type    
//     }
//   }
// }
```

A base function 



- names storred seperately from main code file
- values storred seperately from main code
- functions definitions are identified by a hash
- definitions of functions never change. Since a function id is the hash, when a
  function is changed, you actually change the hash and it is therefore a new
  function. 
- all functions are shared across all users (1 massive shared code base)
- how to seperate public vs private?
- commands for adding definitions to the code base 



# RESEARCH
- Unison: a new distributed programming language" by Paul Chiusano (video)  https://www.youtube.com/watch?v=gCWtkvDQ2ZI
