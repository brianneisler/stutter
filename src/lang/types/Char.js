import anyIsChar from '../util/anyIsChar'
import deftype from '../deftype'

const Char = deftype('lang.Char', 'A single string character.', {
  is: anyIsChar
})

export default Char
