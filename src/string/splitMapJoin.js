import Function from '../lang/types/Function'
import Separator from '../lang/types/Separator'
import String from '../lang/types/String'
import defn from '../lang/defn'
import join from '../lang/join'
import map from '../lang/map'
import split from './split'

const splitMapJoin = defn(
  'splitMapJoin',
  'split map join',

  [Function, Separator, String, () => String],
  (func, separator, string) => join(separator, map(func, split(separator, string)))
)

export default splitMapJoin
