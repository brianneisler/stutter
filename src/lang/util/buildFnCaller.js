import { FN, META } from '../constants/Symbol'
import createContext from './createContext'
import createJSCallee from './createJSCallee'
import functionDefineSymbolFn from './functionDefineSymbolFn'
import objectDefineProperty from './objectDefineProperty'

const fnCallerDispatch = function (context, args, options) {
  return this[FN].dispatch(context, args, options)
}

const fnCallerLog = function (logger) {
  return this[FN].log(logger)
}

const fnCallerUpdate = function (updates) {
  const fn = this[FN]
  const updatedFn = this[FN].update(updates)
  if (fn !== updatedFn) {
    // HACK BRN: This should be fixed by using a class instead
    // eslint-disable-next-line no-use-before-define
    return buildFnCaller(updatedFn)
  }
  return this
}

const fnCallerGetMeta = function () {
  return this[FN].meta
}

const fnCallerGetDispatcher = function () {
  return this[FN].meta.dispatcher
}

const fnCallerGetParameters = function () {
  return this[FN].meta.parameters
}

const fnCallerGetReturns = function () {
  return this[FN].meta.returns
}

const fnCallerDefineProps = (caller, fn) => {
  const { parameters } = fn.meta
  if (parameters && parameters.length > 0) {
    objectDefineProperty(caller, 'length', {
      configurable: true,
      value: parameters.length
    })
  }
  objectDefineProperty(caller, META, {
    configurable: true,
    get: fnCallerGetMeta
  })
  objectDefineProperty(caller, 'dispatcher', {
    configurable: true,
    get: fnCallerGetDispatcher
  })
  objectDefineProperty(caller, 'parameters', {
    configurable: true,
    get: fnCallerGetParameters
  })
  objectDefineProperty(caller, 'returns', {
    configurable: true,
    get: fnCallerGetReturns
  })
  objectDefineProperty(caller, 'dispatch', {
    configurable: true,
    value: fnCallerDispatch
  })
  objectDefineProperty(caller, 'log', {
    configurable: true,
    value: fnCallerLog
  })
  objectDefineProperty(caller, 'update', {
    configurable: true,
    value: fnCallerUpdate
  })
  return functionDefineSymbolFn(caller, fn)
}

const buildFnCaller = (fn) => {
  const caller = function () {
    return fn.apply(
      createContext({
        callee: createJSCallee(),
        jsContext: this
      }),
      arguments
    )
  }
  // TODO BRN: Figure out how to prevent from having to redefine these
  // properties on every caller
  return fnCallerDefineProps(caller, fn)
}

export default buildFnCaller
