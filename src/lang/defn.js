import Any from './types/Any'
import DefinitionsObject from './types/DefinitionsObject'
import MetaObject from './types/MetaObject'
import String from './types/String'
import buildMultiFn from './util/buildMultiFn'
import def from './def'
import fn from './fn'
import protocolNameToDispatcher from './util/protocolNameToDispatcher'

const defn = def(
  'lang.defn',
  {
    description: `Defines a function with a few predefined behaviours. Functions defined with this method will...
      - [curry](#curry)
      - [dispatch to protocols](#protocol)
      - [resolve all args](#all)
      - [validate args](#validate)`,
    since: 'v0.2.0'
  },

  fn(
    [String, MetaObject, DefinitionsObject],
    (name, metaObject, { definitions, options }) =>
      def(
        name,
        metaObject,
        // NOTE BRN: The protocol multi function needs to come first in order for
        // protocols to be checked before the base level functions are checked.
        fn({
          definitions: [
            buildMultiFn(protocolNameToDispatcher(name)),
            ...definitions
          ],
          options
        })
      ),

    [String, String, DefinitionsObject],
    (name, description, { definitions, options }) =>
      def(
        name,
        description,
        // NOTE BRN: The protocol multi function needs to come first in order for
        // protocols to be checked before the base level functions are checked.
        fn({
          definitions: [
            buildMultiFn(protocolNameToDispatcher(name)),
            ...definitions
          ],
          options
        })
      ),

    [String, MetaObject, Any],
    (name, metaObject, ...definitions) =>
      def(
        name,
        metaObject,
        fn(buildMultiFn(protocolNameToDispatcher(name)), ...definitions)
      ),

    [String, MetaObject],
    (name, metaObject) =>
      def(name, metaObject, buildMultiFn(protocolNameToDispatcher(name))),

    [String, DefinitionsObject],
    (name, definitionsObject) => defn(name, '', definitionsObject),

    [String, String, Any],
    (name, description, ...definitions) =>
      def(
        name,
        description,
        // NOTE BRN: The protocol multi function needs to come first in order for
        // protocols to be checked before the base level functions are checked.
        fn(buildMultiFn(protocolNameToDispatcher(name)), ...definitions)
      ),

    [String, Any],
    (name, ...definitions) => defn(name, '', ...definitions)
  )
)

export default defn
