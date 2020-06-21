import Dispatcher from '../classes/Dispatcher'

const fnsToDispatcher = (fns) => new Dispatcher({ fns })

export default fnsToDispatcher
