import { START } from '../constants/Iterator'
import iteratorResolver from './iteratorResolver'
import keyedGetKey from './keyedGetKey'

const keyedToKeyedIterator = (keyed, start = START) => {
  const keysIterator = keyed.keys()
  return iteratorResolver(keysIterator, start, (next) => ({
    ...next,
    key: next.value,
    pik: next.value,
    value: keyedGetKey(keyed, next.value)
  }))
}

export default keyedToKeyedIterator
