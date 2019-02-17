import anyIsType from './anyIsType'
import functionMemoizeWith from './functionMemoizeWith'
import namespacesFilter from './namespacesFilter'
import root from './root'

const namespacesFilterTypes = functionMemoizeWith((namespaces) =>
  namespacesFilter(namespaces, (defined) => anyIsType(defined.value))
)

const namespacesFindTypeForClass = functionMemoizeWith((namespaces, Class) => {
  const types = namespacesFilterTypes(namespaces)
  const result = types.find((defined) => defined.value.class === Class)
  if (result) {
    return result.value
  }
})

/**
 * Scan through all of the existing namespaces to find a matching Type for the
 * given JS class.
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
