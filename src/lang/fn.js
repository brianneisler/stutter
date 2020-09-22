import def from './def'
import { Any, DefinitionsObject, Fn } from './types'
import { definitionsToFn } from './util'
// import Array from './types/Array'
// import Function from './types/Function'

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
