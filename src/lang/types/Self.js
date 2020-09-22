import anyIsSelf from '../util/anyIsSelf'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Self = defineAny(
  'lang.Self',
  {
    description: "A context object which represents a Protocol's current value",
    since: 'v0.1.0'
  },
  definitionToType({
    is: anyIsSelf
  })
)

export default Self
