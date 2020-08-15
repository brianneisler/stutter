import deftype from '../deftype'
import anyIsObserver from '../util/anyIsObserver'

const Observer = deftype(
  'lang.Observer',
  {
    description: 'A value that represents an operation',
    since: 'v0.2.0'
  },
  {
    is: anyIsObserver
  }
)

export default Observer
