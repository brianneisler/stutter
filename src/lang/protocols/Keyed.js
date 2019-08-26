import Key from '../types/Key'
import Self from '../types/Self'
import defprotocol from '../defprotocol'

const Keyed = defprotocol('lang.Keyed', 'A protocol for accessing values stored using keys', {
  get: [Key, Self],
  has: [Key, Self]
})

export default Keyed
