# protocols
Protocol type definitions for methods must be the same as the actual
implementation defined in a Type. Otherwise it complicates the dispatching logic
since every implementations signature needs to be checked instead of simply
checking the protocol's signature.

Protocols will need support for multi function signatures so that they can
support multiple orderings of arguments.
