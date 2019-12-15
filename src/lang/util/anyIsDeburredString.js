import { REGEX_COMBO_MARK, REGEX_LATIN } from '../constants'
import anyIsString from './anyIsString'

const anyIsDeburredString = (any) =>
  anyIsString(any) && (REGEX_LATIN.test(any) || REGEX_COMBO_MARK.test(any))

export default anyIsDeburredString
