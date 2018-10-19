import md5 from 'md5'
import smartChain from './util/smartChain'

// TODO BRN: Add base property to function to skip over currying etc
// TODO BRN: Add property that is a factory function which regenerates the function with new props
export default function fn(func) {
  func.key = md5(fn.toString())
  return smartChain(func)
  //return withRecompose(func)
}
