import _Error from '../classes/Error'
import anyIsError from '../util/anyIsError'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Error = defineAny(
  'lang.Error',
  {
    description:
      'A type representing an error object. Instances of Error objects are thrown when runtime errors occur.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Error,
    is: anyIsError
  })
)

export default Error
