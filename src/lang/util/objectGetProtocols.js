import SYMBOL_PROTOCOLS from '../constants/SYMBOL_PROTOCOLS'
import functionMemoize from './functionMemoize'
import objectGetPrototypeOf from './objectGetPrototypeOf'

const objectGetProtocols = functionMemoize((object) => {
  let protocols = {}
  const prototype = objectGetPrototypeOf(object)
  if (prototype !== null) {
    protocols = objectGetProtocols(prototype)
  }
  const newProtocols = object[SYMBOL_PROTOCOLS] || {}
  return {
    ...protocols,
    ...newProtocols
  }
})

export default objectGetProtocols
