import Applicable from './protocols/Applicable'
import expect from './expect'
import fn from './fn'

const apply = fn((applicable, args) => {
  expect(!Applicable.is(applicable), `
  `)
  return isFunction(method) ? method.apply(null, args) : null
})

export default apply
