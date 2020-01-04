// required
import Generator from './types/Generator'
import defn from './defn'
import is from './is'

const isGenerator = defn(
  'lang.isGenerator',
  {
    description: 'Checks whether the given value is classified as a Generator',
    since: 'v0.2.0'
  },

  is(Generator)
)

export default isGenerator
