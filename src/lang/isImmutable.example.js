import ImmutableList from './classes/ImmutableList'
import ImmutableStack from './classes/ImmutableStack'
import isImmutable from './isImmutable'

example('isImmutable', () => {
  isImmutable([])
  // => false

  isImmutable({})
  // => false

  isImmutable(Map())
  // => true

  isImmutable(ImmutableList())
  // =>  true

  isImmutable(ImmutableStack())
  // => true

  isImmutable(Map().asMutable())
  // => true
})
