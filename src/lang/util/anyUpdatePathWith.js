import anyGetPathWith from './anyGetPathWith'
import anyResolveWith from './anyResolveWith'
import anySetPathWith from './anySetPathWith'

const anyUpdatePathWith = (any, path, updater, contagionFunc, getFunc, setFunc) => {
  return anyResolveWith(anyGetPathWith(any, path, getFunc), (value) => {
    return anyResolveWith(updater(value), (updatedValue) => {
      return anySetPathWith(any, path, updatedValue, contagionFunc, getFunc, setFunc)
    })
  })
}

export default anyUpdatePathWith
