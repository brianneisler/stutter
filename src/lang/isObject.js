// requied
import Object from './types/Object'
import defn from './defn'
import is from './is'

const isObject = defn(
  'lang.isObject',
  {
    description: `Checks if 'any' is the [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types) of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))`,
    since: 'v0.2.0'
  },

  is(Object)
)

export default isObject
