import baseWalk from './util/baseWalk'
import depthFirst from './util/depthFirst'
import identity from './identity'

export function walk(data, path, iteratee = identity, walkee = depthFirst) {
  baseWalk(data, path, iteratee, walkee)
  return data
}
