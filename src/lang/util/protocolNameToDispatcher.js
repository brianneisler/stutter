import Dispatcher from '../classes/Dispatcher'
import root from './root'

const protocolNameToDispatcher = (name, namespaces = root.namespaces) =>
  new Dispatcher({ name, namespaces })

export default protocolNameToDispatcher
