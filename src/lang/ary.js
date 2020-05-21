import Fn from './types/Fn'
import Function from './types/Function'
import Number from './types/Number'
import definitionToFn from './util/definitionToFn'
import defn from './defn'
import fnAry from './util/fnAry'

const ary = defn(
  'lang.ary',
  {
    description:
      'Wraps a function of any arity (including nullary) in a function that accepts exactly `number` parameters. Any extraneous parameters will not be passed to the supplied function.',
    since: 'v0.1.0'
  },

  [Fn, Number, () => Fn],
  (fn, number) => fnAry(fn, number),
  [Number, Fn, () => Fn],
  (number, fn) => fnAry(fn, number),

  [Function, Number, () => Fn],
  (func, number) => fnAry(definitionToFn(func), number),
  [Number, Function, () => Fn],
  (number, func) => fnAry(definitionToFn(func), number)
)

export default ary
