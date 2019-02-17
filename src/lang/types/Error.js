import _Error from '../util/js/Error'
import anyIsError from '../util/anyIsError'
import deftype from '../deftype'

const Error = deftype(
  'Error',
  'A type representing an error object. Instances of Error objects are thrown when runtime errors occur.',
  {
    class: _Error,
    is: anyIsError
  }
)

export default Error
