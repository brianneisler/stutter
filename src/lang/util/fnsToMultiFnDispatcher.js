import Dispatcher from './js/Dispatcher'

const fnsToMultiFnDispatcher = (fns) => new Dispatcher(fns)

export default fnsToMultiFnDispatcher
