import PlainObject from './types/PlainObject'
import String from './types/String'
import Type from './types/Type'
import def from './def'
import fn from './fn'
import type from './type'

const deftype = def(
  'lang.deftype',
  {
    description: 'Defines a new `Type` with the given `name`.',
    since: 'v0.1.0'
  },

  fn(
    [String, PlainObject, PlainObject, () => Type],
    (name, meta, definition) => def(name, meta, type(definition)),

    [String, String, PlainObject, () => Type],
    (name, description, definition) => def(name, description, type(definition)),

    [String, PlainObject, () => Type],
    (name, definition) => def(name, '', type(definition)),

    [String, String, () => Type],
    (name, description) => def(name, description, type({})),

    [String, () => Type],
    (name) => def(name, '', type({}))
  )
)

export default deftype
