import Fn from './js/Fn'
import anyIsFunction from './anyIsFunction'
import fnSetDefinition from './fnSetDefinition'

const buildFn = (func, definition = []) => {
  if (!anyIsFunction(func)) {
    throw new TypeError('Expected `func` to be a Function')
  }
  return fnSetDefinition(new Fn(func), definition)
}

export default buildFn
