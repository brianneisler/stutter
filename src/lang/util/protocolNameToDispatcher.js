import ProtocolDispatcher from './js/ProtocolDispatcher'
import root from './root'

const protocolNameToDispatcher = (name, namespaces = root.namespaces) =>
  new ProtocolDispatcher(name, namespaces)

export default protocolNameToDispatcher
