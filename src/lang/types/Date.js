import _Date from '../classes/Date'
import Equatable from '../protocols/Equatable'
import anyIsDate from '../util/anyIsDate'
import dateEquals from '../util/dateEquals'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'

import Any from './Any'
import Boolean from './Boolean'
import Self from './Self'

const Date = defineAny(
  'lang.Date',
  {
    description:
      'A type that represents a single moment in time. Date objects use a Unix Time Stamp, an integer value that is the number of milliseconds since 1 January 1970 UTC.',
    since: 'v0.1.0'
  },

  definitionToType({
    class: _Date,
    is: anyIsDate,
    protocols: [
      Equatable,
      {
        'lang.equals': definitionsToFn([
          [Self, Any, () => Boolean],
          dateEquals,

          [Any, Self, () => Boolean],
          dateEquals
        ])
      }
    ]
  })
)

export default Date
