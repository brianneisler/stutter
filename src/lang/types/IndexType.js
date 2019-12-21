import anyIsIndex from '../util/anyIsIndex'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

/**
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const Index = defineAny(
  'lang.Index',
  'A type representing an index for an Indexed value.',

  definitionToType({
    is: anyIsIndex
  })
)

export default Index
