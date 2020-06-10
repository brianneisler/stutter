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
- [ ] add support for immutable generators which can be cloned. Will need to
  figure out how to add "clone" to the [regenerator-runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime)


- [x] do not mutabaly assign name to Fns in def. Instead, invoke update with a
  deep update to change the name
- [x] implement assoc
- [x] implement dissoc
- [x] implement has
- [x] implement get
- [x] add support for use of Protocols as Type declarations of Fns 

- [ ] refactor all methods to use `defn`
  - [ ] use namespaces names
  - [ ] add descriptions
- [ ] remove this concept from `defn` 
```
buildMultiFn(protocolNameToDispatcher(name))
```
Instead, simply update the name and have the update sent down to the dispatcher
as well. Dispatchers now support both fns and a protocol at the same time


- [ ] add support for `extend` which should be able to extend an existing type
  with a new protocol (allows for existing types to be implemented with new
  protocols by third party libraries)

- [ ] improve documentation
  - remove all jsdoc comments from primary methods and use code only
  - update autodoc generation to support gathering docs from code

- [ ] package up this project with [pkg](https://www.npmjs.com/package/pkg) 
- [ ] publish binary to homebrew as a separate tap
  https://federicoterzi.com/blog/how-to-publish-your-rust-project-on-homebrew/
- [ ] eventually try to publish this to homebrew core https://docs.brew.sh/Acceptable-Formulae#stable-versions

BUGS
- [x] currently names of functions are not properly propegated to errors. This is
  happening because the function is constructed and the meta data is coppied to
  each layer before the call to `def` is made. Therefore only the top layer in a
  multi layer function is updated. 
