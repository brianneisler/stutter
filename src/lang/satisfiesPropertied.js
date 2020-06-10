import { Any, Boolean } from './types'
import { Propertied } from './protocols'
import defn from './defn'
import satisfies from './satisfies'

const satisfiesPropertied = defn(
  'lang.satisfiesPropertied',
  {
    description: 'Conveience method for satisfies(Propertied)',
    since: 'v0.2.0'
  },

  [Any, () => Boolean],
  satisfies(Propertied)
)

export default satisfiesPropertied
