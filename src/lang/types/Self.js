import anyIsSelf from '../util/anyIsSelf'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Self = defineAny(
  'lang.Self',
  "A context object which represents a Protocol's current value",
  definitionToType({
    is: anyIsSelf
  })
)

export default Self
