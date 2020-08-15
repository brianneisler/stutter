import deftype from '../deftype'
import anyIsDeburredString from '../util/anyIsDeburredString'

const DeburredString = deftype(
  'lang.DeburredString',
  {
    description:
      'A String with no burred letters ([Latin-1 Supplement], [Latin Extended-A] and [combining diacritical marks]) ',
    since: 'v0.1.0'
  },
  {
    is: anyIsDeburredString
  }
)

export default DeburredString
