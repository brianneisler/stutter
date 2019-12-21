import Any from './types/Any'
import Arguments from './types/Arguments'
import Array from './types/Array'
import Character from './types/Character'
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

  [Array, Any, () => Array],
  arrayPush,

  [Any, Array],
  (any, array) => arrayPush(array, any),

  [String, Character, () => String],
  stringPush,

  [Character, String, () => String],
  (character, string) => stringPush(string, character),

  [Arguments, Any, () => Arguments],
  argumentsPush,

  [Any, Arguments, () => Arguments],
  (any, args) => argumentsPush(args, any),

  [ImmutableList, Any, () => ImmutableList],
  immutableListPush,

  [Any, ImmutableList, () => ImmutableList],
  (any, immutableList) => immutableListPush(immutableList, any)
)

export default append
