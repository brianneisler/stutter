import { Math } from '../../lang/classes'
import numbersMin from './numbersMin'
import parseFloat from './parseFloat'

const generateRandomFloat = (lower, upper) => {
  const randomNumber = Math.random()
  return numbersMin(
    lower +
      randomNumber *
        (upper - lower + parseFloat('1e-' + ((randomNumber + '').length - 1))),
    upper
  )
}

export default generateRandomFloat
