import anyIsSeparator from '../util/anyIsSeparator'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Separator = defineAny(
  'lang.Separator',
  {
    description:
      'A String with no burred letters ([Latin-1 Supplement], [Latin Extended-A] and [combining diacritical marks]) ',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsSeparator
  })
)

export default Separator
