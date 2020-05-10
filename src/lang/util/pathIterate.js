import { ITERATOR } from '../constants/Symbol'
import iteratorIterate from './iteratorIterate'

const pathIterate = (path, func) => iteratorIterate(path[ITERATOR](), func)

export default pathIterate
