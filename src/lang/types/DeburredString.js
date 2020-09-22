import anyIsDeburredString from '../util/anyIsDeburredString'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const DeburredString = defineAny(
  'lang.DeburredString',
  {
    description:
      'A String with no burred letters ([Latin-1 Supplement], [Latin Extended-A] and [combining diacritical marks]) ',
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsDeburredString
  })
)

export default DeburredString
