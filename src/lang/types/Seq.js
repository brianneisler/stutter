import _Seq from '../util/js/Seq'
import anyIsSeq from '../util/anyIsSeq'
import deftype from '../deftype'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const Seq = deftype('Seq', 'A type representing a Seq.', {
  class: _Seq,
  is: anyIsSeq
})

export default Seq