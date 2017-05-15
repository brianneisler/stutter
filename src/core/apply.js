import Applicable from './protocols/Applicable'
import expect from './expect'
import fn from './fn'

const apply = fn((applicable, args) => {
  expect(
    !Applicable.is(applicable),
    `${applicable} does not implement Applicable protocol`
  )
  return method.apply(null, args)
})

export default apply
