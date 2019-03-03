FOCUS
- [ ] Focus module on Immutable.js as the underlying backbone of this library
  (ramda/lodash for Immutable.js)
- [ ] Provide extremely high quality error messages. These should point to
  exactly where the problems are and tell the developer why they are happening.

TASKS
- [ ] Implement protocol support for `Fn`s
- [ ] refactor all methods in lang folder to use `defn`
  - use namespaces names
  - add descriptions
  - remove all jsdoc comments from primary methods and use code only
  - update autodoc generation to support gathering docs from code
- [ ] add support for use of Protocols as Type declarations of Fns 
- [ ] add support for multi-function type definitions in Protocols

BUGS
- [ ] currently names of functions are not properly propegated to errors. This is
  happening because the function is constructed and the meta data is coppied to
  each layer before the call to `def` is made. Therefore only the top layer in a
  multi layer function is updated. 
