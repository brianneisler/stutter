import Self from '../types/Self'
import functionMemoizeWith from './functionMemoizeWith'

/**
 * @returns {ImmutableMap}
 */
const protocolsGroupByFunctionName = functionMemoizeWith(
  (protocols, functionName) =>
    protocols.groupBy((protocol) => {
      const definition = protocol.getDefinitions().get(functionName)
      return definition.indexOf(Self)
    })
)

export default protocolsGroupByFunctionName
