import anyIsObserver from '../util/anyIsObserver'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Observer = defineAny(
  'lang.Observer',
  {
    description: 'A value that represents an operation',
    since: 'v0.2.0'
  },
  definitionToType({
    is: anyIsObserver
  })
)

export default Observer
