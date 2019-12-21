import defn from './defn'
import nth from './nth'

const head = defn(
  'lang.head',
  {
    description: 'Returns the first element of the given list or string.',
    since: 'v0.2.0'
  },

  nth(0)
)

export default head
