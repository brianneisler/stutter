import _Error from '../classes/Error'
import anyIsError from '../util/anyIsError'
import deftype from '../deftype'

const Error = deftype(
  'lang.Error',
  'A type representing an error object. Instances of Error objects are thrown when runtime errors occur.',
  {
    class: _Error,
    is: anyIsError
  }
)

export default Error
