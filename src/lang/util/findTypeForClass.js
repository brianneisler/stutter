import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilterTypes from './namespacesFilterTypes'
import root from './root'

const namespacesFindTypeForClass = functionMemoizeWith((namespaces, Class) => {
  const types = namespacesFilterTypes(namespaces)
  return types.find((type) => type.class === Class)
})

/**
 * Scan through all of the existing `Namespace`s to find a matching `Type` for the
 * given js `Class`.
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {Function} Class The js `Class`
 * @returns {?Type} The matching `Type` found for the `Class`. Otherwise returns
 * `null`
 * @example
 *
 */
const findTypeForClass = (Class, namespaces = root.namespaces) =>
  namespacesFindTypeForClass(namespaces, Class)

export default findTypeForClass
