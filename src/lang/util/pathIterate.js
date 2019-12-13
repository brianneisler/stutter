import SYMBOL_ITERATOR from '../constants/SYMBOL_ITERATOR'
import iteratorIterate from './iteratorIterate'

const pathIterate = (path, func) => iteratorIterate(path[SYMBOL_ITERATOR](), func)

export default pathIterate
