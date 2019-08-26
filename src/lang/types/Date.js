import _Date from '../util/js/Date'
import anyIsDate from '../util/anyIsDate'
import deftype from '../deftype'

const Date = deftype(
  'Date',
  'A type that represents a single moment in time. Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.',
  {
    class: _Date,
    is: anyIsDate
  }
)

export default Date
