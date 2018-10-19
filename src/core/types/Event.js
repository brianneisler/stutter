import type from '../type'
import Any from './Any'
import String from './String'

const Event = type('Event', {
  type: String,
  payload: Any
})

export default Event
