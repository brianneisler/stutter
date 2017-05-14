import Immutable from 'immutable'
import objectReduce from './util/objectReduce'
import isFunction from './isFunction'

const imFunction = _.memoize((name) => function(...args) {
  return this['@@functions'][name].call(null, ...args, this)
})
const imProp = _.memoize((name) => ({
  enumerable: true,
  get: function() {
    return this['@@data'].get(name)
  },
  set: function() {
    throw new Error(`Cannot set immutable property '${name}'`)
  }
}))

const isDataObject = (value) => (!!value && !!value['@@data'])
const isType = (value) => (!!value && !!value['@@type'])

export default function type(name, def) {
  const functions = objectReduce(def, (result, value, key) => {
    if (isFunction(value) && !isType(value)) {
      result[key] = value
    }
    return result
  }, {})
  // const props = reduce(def, (result, value, key) => {
  //   return isClass(value)
  //     ? set(result, key, value)
  //     : result
  // }, {})
  class NewType extends Type {
    static get name() { return name }
    // set(key, value) {
    //   //TODO BRN: check type
    //   return super.set(key, value)
    // }

    constructor(data, fns) {
      super(data, fns)
      _.each(def, (value, prop) => {
        if (isType(value)) {
          Object.defineProperty(this, prop, imProp(prop))
        }
      })
    }
    toString() {
      return this['@@data'].__toString(`${name} {`, '}')
    }
  }

  _.each(def, (value, prop) => {
    if (!isType(value) && isFunction(value)) {
      NewType.prototype[prop] = imFunction(prop)
    }
  })

  const makeType = function(data) {
    return new NewType(data, functions)
  }
  makeType['@@type'] = NewType
  return makeType
}

class Type {
  constructor(data, functions) {
    Object.defineProperty(this, '@@data', {
      value: Immutable.Map(data) || Immutable.Map({})
    })
    Object.defineProperty(this, '@@functions', {
      value: functions
    })
  }
  delete(key) {
    return this['@@data'].delete(key)
  }
  equals(value) {
    if (isDataObject(value)) {
      return this['@@data'].equals(value['@@data'])
    }
    return this['@@data'].equals(value)
  }
  hashCode() {
    return this['@@data'].hashCode()
  }
  get(key) {
    return this['@@data'].get(key)
  }
  has(key) {
    return this['@@data'].has(key)
  }
  set(key, value) {
    return new this.constructor(
      this['@@data'].set(key, value),
      this['@@functions']
    )
  }
  inspect() {
    return this.toString()
  }
  [Symbol.iterator]() {
    return this['@@data'].keys()
  }
}
