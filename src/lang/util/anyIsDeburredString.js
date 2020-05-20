import { COMBO_MARK, LATIN } from '../constants/Regex'
import anyIsString from './anyIsString'

const anyIsDeburredString = (any) =>
  anyIsString(any) && (LATIN.test(any) || COMBO_MARK.test(any))

export default anyIsDeburredString
