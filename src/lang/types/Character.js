import anyIsCharacter from '../util/anyIsCharacter'
import deftype from '../deftype'

const Character = deftype('lang.Character', 'A single string character.', {
  is: anyIsCharacter
})

export default Character
