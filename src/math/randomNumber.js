import { generateRandomFloat, generateRandomInteger } from './util'
import defn from '../lang/defn'

const randomNumber = defn(
  'math.randomNumber',
  {
    description: 'Generate a random number between the lower and upper bound',
    since: 'v0.2.0'
  },

  [Number, Number, Boolean, () => Number],
  (lower, upper, floating) => {
    if (lower > upper) {
      const temp = lower
      lower = upper
      upper = temp
    }
    if (floating || lower % 1 || upper % 1) {
      return generateRandomFloat(lower, upper)
    }
    return generateRandomInteger(lower, upper)
  },

  [Number, Boolean, () => Number],
  (upper, floating) => randomNumber(0, upper, floating),

  [Boolean, () => Number],
  (floating) => randomNumber(0, 1, floating),

  [() => Number],
  () => randomNumber(0, 1, false)
)

export default randomNumber
