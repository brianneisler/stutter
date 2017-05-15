import getTag from './util/getTag'
import nodeIsTypedArray from './util/nodeIsTypedArray'
import reTypedTag from './util/reTypedTag'
import fn from './fn'

const isTypedArray = nodeIsTypedArray
  ? fn((value) => nodeIsTypedArray(value))
  : fn((value) => typeof value == 'object' && value !== null && reTypedTag.test(getTag(value)))

export default isTypedArray
