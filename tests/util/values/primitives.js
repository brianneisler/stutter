import { arrayFlatten } from '../../../src/lang/util'
import booleanObjects from './booleanObjects'
import booleans from './booleans'
import nils from './nils'
import numberObjects from './numberObjects'
import numbers from './numbers'
import stringObjects from './stringObjects'
import strings from './strings'
import symbols from './symbols'

const typeMap = {
  booleans,
  booleanObjects,
  nils,
  numbers,
  numberObjects,
  strings,
  stringObjects,
  symbols
}

const primitives = (selected = ['booleans', 'nils', 'numbers', 'strings', 'symbols']) =>
  arrayFlatten(arrayMap(objectValues(objectPick(typeMap, selected)), (type) => type(context)))

export default primitives
