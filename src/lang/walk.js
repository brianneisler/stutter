import { Function, Undefined } from './types'
import { Walkable } from './protocols'
import { walkerWalk } from './util'
import defn from './defn'
import walker from './walker'

const walk = defn(
  'lang.walk',
  {
    description:
      'Walk the given value and execute the iteratee function for each value in the walk.',
    since: 'v0.2.0'
  },

  [Walkable, Function, () => Undefined],
  (walkable, iteratee) => walkerWalk(walker(walkable), iteratee)
)

export default walk
