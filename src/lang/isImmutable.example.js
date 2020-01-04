import ImmutableList from './util/js/ImmutableList'
import ImmutableStack from './util/js/ImmutableStack'
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
