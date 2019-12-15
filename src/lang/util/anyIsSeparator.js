import anyIsRegExp from './anyIsRegExp'
import anyIsString from './anyIsString'

const anyIsSeparator = (any) => anyIsString(any) || anyIsRegExp(any)

export default anyIsSeparator
