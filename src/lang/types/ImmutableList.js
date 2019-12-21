import Any from './Any'
import Boolean from './Boolean'
import Index from './IndexType'
import Indexed from '../protocols/Indexed'
import Integer from './Integer'
import Self from './Self'
import _ImmutableList from '../util/js/ImmutableList'
import anyIsImmutableList from '../util/anyIsImmutableList'
import deftype from '../deftype'
import fn from '../fn'
import immutableListDeleteIndex from '../util/immutableListDeleteIndex'
import immutableListGetIndex from '../util/immutableListGetIndex'
import immutableListHasIndex from '../util/immutableListHasIndex'
import immutableListLength from '../util/immutableListLength'
import immutableListSetIndex from '../util/immutableListSetIndex'

/**
 *
 * @type {Type}
 * @since v0.1.0
 * @category lang
 * @example
 */
const ImmutableList = deftype('lang.ImmutableList', 'A type representing a ImmutableList.', {
  class: _ImmutableList,
  is: anyIsImmutableList,

  protocols: [
    Indexed,
    {
      'lang.deleteIndex': fn([
        [Self, Index, () => Self],
        immutableListDeleteIndex,

        [Index, Self, () => Self],
        (index, self) => immutableListDeleteIndex(self, index)
      ]),
      'lang.getIndex': fn([
        [Self, Index, () => Any],
        immutableListGetIndex,

        [Index, Self, () => Any],
        (index, self) => immutableListGetIndex(self, index)
      ]),
      'lang.hasIndex': fn([
        [Self, Index, () => Boolean],
        immutableListHasIndex,

        [Index, Self, () => Boolean],
        (index, self) => immutableListHasIndex(self, index)
      ]),
      'lang.length': fn([Self, () => Integer], immutableListLength),
      'lang.setIndex': fn([
        [Self, Index, Any, () => Self],
        immutableListSetIndex,

        [Index, Any, Self, () => Self],
        (index, any, self) => immutableListSetIndex(self, index, any)
      ])
    }
  ]
})

export default ImmutableList
