import _Exception from '../util/js/Exception'
import anyIsException from '../util/anyIsException'
import deftype from '../deftype'

const Exception = deftype(
  'lang.Exception',
  'A type representing a throwable that is expected and should be properly handled by application code.',
  {
    class: _Exception,
    is: anyIsException
  }
)

export default Exception
