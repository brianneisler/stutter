import { FN } from '../constants/Symbol'
import anyResolveWith from './anyResolveWith'
import functionDefineLength from './functionDefineLength'
import functionDefineSymbolFn from './functionDefineSymbolFn'

const functionComplement = (func, number = 1) => {
  if (number > 0) {
    let complementFunction
    if (number % 2 === 1) {
      complementFunction = function () {
        return anyResolveWith(
          func.apply(this, arguments),
          (resolvedResult) => !resolvedResult
        )
      }
    } else {
      complementFunction = function () {
        return anyResolveWith(
          func.apply(this, arguments),
          (resolvedResult) => !!resolvedResult
        )
      }
    }
    if (func[FN]) {
      return functionDefineSymbolFn(complementFunction, func[FN])
    }
    return functionDefineLength(complementFunction, func.length)
  }
  return func
}

export default functionComplement
