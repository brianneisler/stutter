import { Integer } from '../lang/types'
import { MAX_SAFE } from '../lang/constants/Integer'
import { generateRandomInteger } from './util'
import defn from '../lang/defn'

const randomInteger = defn(
  'math.randomInteger',
  {
    description:
      'Generates a random integer between 0 and the maximum given value',
    since: 'v0.1.0'
  },

  [() => Integer],
  () => randomInteger(0, MAX_SAFE),

  [Integer, () => Integer],
  (upper) => randomInteger(0, upper),

  [Integer, Integer, () => Integer],
  (lower, upper) => generateRandomInteger(lower, upper)
)

export default randomInteger
