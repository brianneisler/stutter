import _Exception from '../classes/Exception'
import anyIsException from '../util/anyIsException'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Exception = defineAny(
  'lang.Exception',
  {
    description:
      'A type representing a throwable that is expected and should be properly handled by application code.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Exception,
    is: anyIsException
  })
)

export default Exception
