import { definitionsToFn } from './util'
import Any from './types/Any'
// import Array from './types/Array'
import Fn from './types/Fn'
// import Function from './types/Function'
import DefinitionsObject from './types/DefinitionsObject'
import def from './def'

const fn = def(
  'lang.fn',
  {
    description: `Defines an Fn function.
      An Fn function is a function with a few predefined behaviours. These functions will...
      - [curry](#curry)
      - [validate args](validate)
      - [resolve all args](#allWith)`,
    since: 'v0.2.0'
  },
  definitionsToFn([
    // TODO BRN: Add support for unions and rest...
    // [Function.or([Function, Array]).rest(), () => Fn],
    // (func) => definitionsToFn([func]),

    [DefinitionsObject, () => Fn],
    ({ definitions, options }) => definitionsToFn(definitions, options),

    [Any, () => Fn],
    (...definitions) => definitionsToFn(definitions)
  ])
)

export default fn
