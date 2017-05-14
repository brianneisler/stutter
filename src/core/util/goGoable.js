import Goable from '../protocols/Goable'
import isFunction from '../isFunction'
import goResolve from './goResolve'

export default async function goGoable(goable, args = []) {
  let result
  if (isFunction(goable)) {
    result = goable(...args)
  } else if (Goable.is(goable)) {
    result = goable.go(args)
  }
  return await goResolve(result)
}
