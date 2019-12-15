import anyIsSeparator from '../util/anyIsSeparator'
import deftype from '../deftype'

const Separator = deftype(
  'lang.Separator',
  'A String with no burred letters ([Latin-1 Supplement], [Latin Extended-A] and [combining diacritical marks]) ',
  {
    is: anyIsSeparator
  }
)

export default Separator
