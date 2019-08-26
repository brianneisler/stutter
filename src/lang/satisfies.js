import anySatisfies from './util/anySatisfies'
import defn from './defn'

const satisfies = defn('satisfies', [Protocol, Any], (protocol, any) => anySatisfies(any, protocol))

export default satisfies
