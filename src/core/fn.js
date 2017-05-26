import md5 from 'md5'
//import withRecompose from './util/withRecompose'


// TODO BRN: Add base property to function to skip over currying etc
// TODO BRN: Add property that is a factory function which regenerates the function with new props
export default function fn(func) {
  func.key = md5(fn.toString())
  return func
  //return withRecompose(func)
}
