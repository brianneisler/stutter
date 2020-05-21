import Any from './types/Any'
import Arguments from './types/Arguments'
import Array from './types/Array'
import Element from './types/Element'
import ImmutableList from './types/ImmutableList'
import String from './types/String'
import argumentsPush from './util/argumentsPush'
import arrayPush from './util/arrayPush'
import defn from './defn'
import immutableListPush from './util/immutableListPush'
import stringPush from './util/stringPush'

const append = defn(
  'lang.append',
  {
    description:
      'Returns a new list containing the contents of the given list, followed by the given value.',
    since: 'v0.2.0'
  },

  // TODO BRN: Accepting both data first and data last get weird with append
  // in cases where you may want to append an object (like an Array) to a List.
  // Which one are you actually appending to? The List or the Array?

  [Array, Element, () => Array],
  (array, element) => arrayPush(array, element.valueOf()),

  [Array, Any, () => Array],
  arrayPush,

  [Element, Array, () => Array],
  (element, array) => arrayPush(array, element.valueOf()),

  [String, String, () => String],
  stringPush,

  [Arguments, Element, () => Arguments],
  (args, element) => argumentsPush(args, element.valueOf()),

  [Arguments, Any, () => Arguments],
  argumentsPush,

  [Element, Arguments, () => Arguments],
  (element, args) => argumentsPush(args, element.valueOf()),

  [ImmutableList, Element, () => ImmutableList],
  (immutableList, element) =>
    immutableListPush(immutableList, element.valueOf()),

  [ImmutableList, Any, () => ImmutableList],
  immutableListPush,

  [Element, ImmutableList, () => ImmutableList],
  (element, immutableList) =>
    immutableListPush(immutableList, element.valueOf())
)

export default append
