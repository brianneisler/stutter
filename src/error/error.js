import curryN from '../common/curryN'
import throwable from './throwable'

const error = curryN(1, (message, { data, reasons, type } = {}) =>
  throwable({ data, message, reasons, type })
)

export default error
