import { ITERATOR } from '../constants/Symbol'
import iteratorIterateInSeries from './iteratorIterateInSeries'

const pathIterate = (path, func) =>
  iteratorIterateInSeries(path[ITERATOR](), func)

export default pathIterate
