import Any from './types/Any'
import Boolean from './types/Boolean'
import Protocol from './types/Protocol'
import anySatisfies from './util/anySatisfies'
import defn from './defn'

const satisfies = defn(
  'lang.satisfies',

  [Protocol, Any, () => Boolean],
  (protocol, any) => anySatisfies(any, protocol),

  [Any, Protocol, () => Boolean],
  (any, protocol) => anySatisfies(any, protocol)
)

export default satisfies
