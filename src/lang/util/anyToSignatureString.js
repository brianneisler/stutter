import { TO_SIGNATURE } from '../constants/Symbol'
import anyIsObject from './anyIsObject'
import sourceToString from './sourceToString'

const anyToSignatureString = (any) => {
  if (anyIsObject(any) && any[TO_SIGNATURE]) {
    return any[TO_SIGNATURE]
  }
  return sourceToString(any)
}

export default anyToSignatureString
