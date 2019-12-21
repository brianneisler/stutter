import anyIsCharacter from '../util/anyIsCharacter'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Character = defineAny(
  'lang.Character',
  'A single String character.',

  definitionToType({
    is: anyIsCharacter
  })
)

export default Character
