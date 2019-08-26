import Seq from './js/Seq'

/**
 * Filter values from an iterable collection of namespaces
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {ImmutableMap<Namespace>} namespaces An `ImmutableMap` of `Namespace`s
 * @param {Function} func The filter function
 * @returns {Seq<Any>}
 */
const namespacesFilter = (namespaces, func) =>
  namespaces.reduce((results, namespace) => results.concat(namespace.filter(func)), Seq([]))

export default namespacesFilter
