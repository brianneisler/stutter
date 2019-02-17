import SYMBOL_PROTOCOLS from '../constants/SYMBOL_PROTOCOLS'
import anyIsObject from './anyIsObject'

const anySatisfies = (any, protocol) => {
  if (!anyIsObject(any)) {
    return false
  }

  const protocols = any[SYMBOL_PROTOCOLS]
  return !!protocols && !!protocols[protocol]

  // let index = -1
  // const { keys } = this
  // let size = keys.length
  //
  // while (size--) {
  //   const key = keys[++index]
  //   if (!isFunction(value[key])) {
  //     return false
  //   }
  // }
  // return true
}

export default anySatisfies
