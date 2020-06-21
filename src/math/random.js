// required
import Math from '../lang/classes/Math'
import defn from '../lang/defn'

const randomInteger = (lower, upper) => lower + Math.floor(Math.random() * (upper - lower + 1))

const randomFloat = (lower, upper) => {
  const randomNumber = Math.random()
  return Math.min(
    lower + randomNumber * (upper - lower + parseFloat('1e-' + ((randomNumber + '').length - 1))),
    upper
  )
}

const random = defn(
  'math.random',
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
      return randomFloat(lower, upper)
    }
    return randomInteger(lower, upper)
  },

  [Number, Boolean, () => Number],
  (upper, floating) => random(0, upper, floating),

  [Boolean, () => Number],
  (floating) => random(0, 1, floating),

  [() => Number],
  () => random(0, 1, false)
)

export default random
