// required
import Array from './types/Array'
import Iterable from './protocols/Iterable'
import Iterator from './types/Iterator'
import defn from './defn'
import iterator from './iterator'
import iteratorToArray from './util/iteratorToArray'

const values = defn(
  'lang.values',
  {
    description: `Returns an array of all the values of the given collection. Note that the order of the output array is not guaranteed across different JS platforms.`,
    since: 'v0.2.0'
  },

  [Array, () => Array],
  (array) => array,

  [Iterable, () => Array],
  (iterable) => iteratorToArray(iterator(iterable)),

  [Iterator, () => Array],
  (iter) => iteratorToArray(iter)
)

export default values
