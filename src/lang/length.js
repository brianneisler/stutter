import defn from './defn'
import size from './size'

const length = defn(
  'lang.length',
  {
    description: 'Alias for the "size" method.',
    since: 'v0.1.0'
  },
  size
)

export default length
