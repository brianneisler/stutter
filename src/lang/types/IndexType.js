import anyIsIndex from '../util/anyIsIndex'
import deftype from '../deftype'

/**
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const Index = deftype('lang.Index', 'A type representing an index for an Indexed value.', {
  is: anyIsIndex
})

export default Index
