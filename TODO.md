- [] Focus module on Immutable.js as the underlying backbone of this library (ramda/lodash for Immutable.js)

TASKS
- [] currently names of functions are not properly propegated to errors. This is
  happening because the function is constructed and the meta data is coppied to
  each layer before the call to `def` is made. Therefore only the top layer in a
  multi layer function is updated. 
