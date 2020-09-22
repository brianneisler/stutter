import _Seq from '../classes/Seq'
import anyIsSeq from '../util/anyIsSeq'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'

const Seq = defineAny(
  'lang.Seq',
  {
    description: 'A type representing a Seq.',
    since: 'v0.1.0'
  },
  definitionToType({
    class: _Seq,
    is: anyIsSeq
  })
)

export default Seq
