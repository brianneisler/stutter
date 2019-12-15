import anyIsDeburredString from '../util/anyIsDeburredString'
import deftype from '../deftype'

const DeburredString = deftype(
  'lang.DeburredString',
  'A String with no burred letters ([Latin-1 Supplement], [Latin Extended-A] and [combining diacritical marks]) ',
  {
    is: anyIsDeburredString
  }
)

export default DeburredString
