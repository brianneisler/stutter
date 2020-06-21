import ImmutableMap from '../classes/ImmutableMap'
import root from './root'

/**
 * Store the given `Namespace` at the `prop` in the global root
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {String} prop The prop to globally store the namespace
 * @param {Namespace} namespace The namespace to store
 * @example
 */
const propSetNamespace = (prop, namespace) => {
  if (!root.namespaces) {
    root.namespaces = ImmutableMap()
  }
  root.namespaces = root.namespaces.set(prop, namespace)
}

export default propSetNamespace
