import Any from './types/Any'
import Key from './types/Key'
import Self from './types/Self'
import defprotocol from './defprotocol'

example(() => {
  defprotocol('Keyed', 'A Protocol for a storing values by key', {
    get: [Self, Key, () => Any],
    set: [Self, Key, Any, () => Self]
  })
})

example(() => {
  defprotocol('Keyed', {
    get: [Self, Key, () => Any],
    set: [Self, Key, Any, () => Self]
  })
})
