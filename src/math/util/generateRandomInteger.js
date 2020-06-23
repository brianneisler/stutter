import { Math } from '../../lang/classes'
import numberFloor from './numberFloor'

const generateRandomInteger = (lower, upper) =>
  lower + numberFloor(Math.random() * (upper - lower + 1))

export default generateRandomInteger
