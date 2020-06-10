import { Any, Boolean } from './types'
import { anyIdenticalWithAny } from './util'
import defn from './defn'

const equals = defn(
  'lang.equals',
  {
    description: `Returns \`true\` if its arguments are equivalent, \`false\` otherwise. Handles cyclical data structures.`,
    since: 'v0.2.0'
  },

  [Any, Any, () => Boolean],
  anyIdenticalWithAny
)

export default equals
