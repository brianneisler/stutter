import Goable from './protocols/Goable'
import Routine from './types/Routine'
import isFunction from './isFunction'
import satisfies  from './satisfies'

const go = async (args, goable) => {
  if (!satisfies(Goable, goable) && !isFunction(goable)) {
    throw new Error('Expected Goable value or function')
  }
  return await Routine({ goable }).go(args)
}
export default go
