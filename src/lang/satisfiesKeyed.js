import { Any, Boolean } from './types'
import { Keyed } from './protocols'
import defn from './defn'
import satisfies from './satisfies'

const satisfiesKeyed = defn(
  'lang.satisfiesKeyed',
  {
    description: 'Conveience method for satisfies(Keyed)',
    since: 'v0.2.0'
  },

  [Any, () => Boolean],
  satisfies(Keyed)
)

export default satisfiesKeyed
