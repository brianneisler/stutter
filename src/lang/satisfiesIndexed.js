import { Any, Boolean } from './types'
import { Indexed } from './protocols'
import defn from './defn'
import satisfies from './satisfies'

const satisfiesIndexed = defn(
  'lang.satisfiesIndexed',
  {
    description: 'Conveience method for satisfies(Indexed)',
    since: 'v0.2.0'
  },

  [Any, () => Boolean],
  satisfies(Indexed)
)

export default satisfiesIndexed
