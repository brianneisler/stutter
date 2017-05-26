import baseCompose from './util/baseCompose'
import { NULL_TAG, UNDEFINED_TAG } from './util/constants'
import _context from './util/context'
import getRawTag from './util/getRawTag'
import objectToString from '../util/objectToString'
import withCurry from './util/withCurry'
import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'

const enhance = recompose(
  withCurry(1),
  withContext(_context)
)

const getTag = enhance(({ context }) => {
  const { Object: _Object, Symbol } = context
  const { toStringTag } = Symbol

  return fn((value) => {
    if (value == null) {
      return value === undefined ? UNDEFINED_TAG : NULL_TAG
    }
    value = _Object(value)
    return (toStringTag && toStringTag in value)
      ? getRawTag(value)
      : objectToString(value)
  }
})

export default getTag
