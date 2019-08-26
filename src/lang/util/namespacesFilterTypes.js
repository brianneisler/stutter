import anyIsType from './anyIsType'
import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilter from './namespacesFilter'

/**
 * Filter `Type`s from an iterable collection of `Namespace`s
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {ImmutableMap<Namespace>} namespaces An `ImmutableMap` of `Namespace`s
 * @returns {Seq<Type>}
 */
const namespacesFilterTypes = functionMemoizeWith((namespaces) =>
  namespacesFilter(namespaces, (defined) => anyIsType(defined.value)).map(
    (defined) => defined.value
  )
)

export default namespacesFilterTypes
