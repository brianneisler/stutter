// required
import Fn from './types/Fn'
import Function from './types/Function'
import definitionToFn from './util/definitionToFn'
import defn from './defn'
import fnCurry from './util/fnCurry'
import fnCurryArity from './util/fnCurryArity'
import functionCurry from './util/functionCurry'

const curry = defn(
  'lang.curry',
  `Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If \`f\` is a ternary function and \`g\` is \`curry(f)\`, the following are equivalent:

    - \`g(1)(2)(3)\`
    - \`g(1)(2, 3)\`
    - \`g(1, 2)(3)\`
    - \`g(1, 2, 3)\`

  Secondly, the special placeholder value [\`__\`](#__) may be used to specify "gaps", allowing partial application of any combination of arguments, regardless of their positions. If \`g\` is as above and \`_\` is [\`__\`](#__), the following are equivalent:

    - \`g(1, 2, 3)\`
    - \`g(_, 2, 3)(1)\`
    - \`g(_, _, 3)(1)(2)\`
    - \`g(_, _, 3)(1, 2)\`
    - \`g(_, 2)(1)(3)\`
    - \`g(_, 2)(1, 3)\`
    - \`g(_, 2)(_, 3)(1)\``,

  [Fn, () => Fn],
  (fn) => fnCurry(fn),

  [Number, Fn],
  (n, fn) => fnCurryArity(fn, n),

  [Fn, Number],
  (fn, n) => fnCurryArity(fn, n),

  [Function, () => Function],
  (func) => functionCurry(func),

  [Number, Function],
  (n, func) => fnCurryArity(definitionToFn(func), n),

  [Function, Number],
  (func, n) => fnCurryArity(definitionToFn(func), n)
)

export default curry
