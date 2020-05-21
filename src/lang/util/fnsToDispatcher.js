import Dispatcher from './js/Dispatcher'

const fnsToDispatcher = (fns) => new Dispatcher({ fns })

export default fnsToDispatcher
