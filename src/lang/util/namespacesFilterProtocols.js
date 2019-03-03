import anyIsProtocol from './anyIsProtocol'
import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilter from './namespacesFilter'

/**
 * Filter `Protocol`s from an iterable collection of `Namespace`s
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {ImmutableMap<Namespace>} namespaces An `ImmutableMap` of `Namespace`s
 * @returns {Seq<Protocol>}
 */
const namespacesFilterProtocols = functionMemoizeWith((namespaces) =>
  namespacesFilter(namespaces, (defined) => anyIsProtocol(defined.value)).map(
    (defined) => defined.value
  )
)

export default namespacesFilterProtocols
