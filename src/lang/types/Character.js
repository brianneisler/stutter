import Equatable from '../protocols/Equatable'
import anyIdenticalWithAny from '../util/anyIdenticalWithAny'
import anyIsCharacter from '../util/anyIsCharacter'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

import Any from './Any'
import Boolean from './Boolean'
import Self from './Self'

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
