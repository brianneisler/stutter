import Any from './types/Any'
import Protocol from './types/Protocol'
import anySatisfies from './util/anySatisfies'
import defn from './defn'

const satisfies = defn(
  'lang.satisfies',

  [Protocol, Any],
  (protocol, any) => anySatisfies(any, protocol),

  [Any, Protocol],
  (any, protocol) => anySatisfies(any, protocol)
)

export default satisfies
