import Any from './Any'
import Boolean from './Boolean'
import Equatable from '../protocols/Equatable'
import Self from './Self'
import _Date from '../classes/Date'
import anyIsDate from '../util/anyIsDate'
import dateEquals from '../util/dateEquals'
import deftype from '../deftype'
import fn from '../fn'

const Date = deftype(
  'lang.Date',
  {
    description:
      'A type that represents a single moment in time. Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.',
    since: 'v0.1.0'
  },

  {
    class: _Date,
    is: anyIsDate,
    protocols: [
      Equatable,
      {
        'lang.equals': fn(
          [Self, Any, () => Boolean],
          dateEquals,

          [Any, Self, () => Boolean],
          dateEquals
        )
      }
    ]
  }
)

export default Date
