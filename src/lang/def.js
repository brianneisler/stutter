import { Any, MetaObject, String } from './types'
import { defineAny, definitionsToFn } from './util'

const def = defineAny(
  'lang.def',
  {
    description: 'Defines a value to store in a namespace with the given name.',
    since: 'v0.2.0'
  },

  definitionsToFn([
    [String, MetaObject, Any, () => Any],
    (name, meta, value) => defineAny(name, meta, value),

    [String, String, Any, () => Any],
    (name, description, value) => defineAny(name, description, value),

    [String, Any, () => Any],
    (name, value) => def(name, '', value)
  ])
)
export default def
