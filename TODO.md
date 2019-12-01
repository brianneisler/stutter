FOCUS
- [ ] Focus module on Immutable.js as the underlying backbone of this library
  (ramda/lodash for Immutable.js)
- [ ] Provide extremely high quality error messages. These should point to
  exactly where the problems are and tell the developer why they are happening.

TASKS
- [x] fix `functionCurry` tests (might need to change functionCurry signature)
- [x] Implement protocol support for `Fn`s
  - [x] update `Fn` code to support the new `self` property. It should use this
    in type checking as well currying (anywhere that `Parameter`s are used) 
- [x] add support for multi-function type definitions in Protocols

- [ ] refactor all methods to use `defn`
  - [ ] use namespaces names
  - [ ] add descriptions
- [ ] implement assoc
- [ ] implement dissoc
- [ ] implement has
- [ ] implement get
- [ ] add support for use of Protocols as Type declarations of Fns 

- [ ] add support for `extend` which should be able to extend an existing type
  with a new protocol (allows for existing types to be implemented with new
  protocols by third party libraries)


- [ ] improve documentation
  - remove all jsdoc comments from primary methods and use code only
  - update autodoc generation to support gathering docs from code

BUGS
- [ ] currently names of functions are not properly propegated to errors. This is
  happening because the function is constructed and the meta data is coppied to
  each layer before the call to `def` is made. Therefore only the top layer in a
  multi layer function is updated. 
