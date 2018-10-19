import Event from './types/Event'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose()

const event = enhance(() => fn((type, payload) => {
  return Event({
    type,
    payload
  })
}))

export default event
