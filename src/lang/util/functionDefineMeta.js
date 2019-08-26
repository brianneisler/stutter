import objectDefineProperty from './objectDefineProperty'

const functionDefineMeta = (func, meta) => {
  if (meta.curried !== undefined) {
    objectDefineProperty(func, 'curried', {
      value: meta.curried,
      configurable: true
    })
  }
  if (meta.dispatcher !== undefined) {
    objectDefineProperty(func, 'dispatcher', {
      value: meta.dispatcher,
      configurable: true
    })
  }
  if (meta.parameters !== undefined) {
    objectDefineProperty(func, 'parameters', {
      value: meta.parameters,
      configurable: true
    })
    objectDefineProperty(func, 'length', {
      value: meta.parameters.length,
      configurable: true
    })
  }
  if (meta.returns !== undefined) {
    objectDefineProperty(func, 'returns', {
      value: meta.returns,
      configurable: true
    })
  }
  return func
}

export default functionDefineMeta
