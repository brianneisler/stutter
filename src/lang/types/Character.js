import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Self from './Self'
import anyIdenticalWithAny from '../util/anyIdenticalWithAny'
import anyIsCharacter from '../util/anyIsCharacter'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

const Character = defineAny(
  'lang.Character',
  {
    description: 'A single String character.',
    since: 'v0.1.0'
  },

  definitionToType({
    is: anyIsCharacter,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          anyIdenticalWithAny,

          [Any, Self, () => Boolean],
          anyIdenticalWithAny
        ])
      }
    ]
  })
)

export default Character
