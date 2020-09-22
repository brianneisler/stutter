import ImmutableList from '../classes/ImmutableList'

import anyIsImmutableList from './anyIsImmutableList'

const anyToImmutableList = (any) => {
  if (anyIsImmutableList(any)) {
    return any
  }
  return ImmutableList(any)
}

export default anyToImmutableList
