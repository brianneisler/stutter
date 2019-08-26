import _Buffer from '../util/js/Buffer'
import anyIsBuffer from '../util/anyIsBuffer'
import deftype from '../deftype'

const Buffer = deftype('Buffer', 'A type for dealing with binary data directly.', {
  class: _Buffer,
  is: anyIsBuffer
})

export default Buffer
