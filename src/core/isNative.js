import ERROR_TEXT_CORE from './constants/ERROR_TEXT_CORE'
import baseIsNative from './util/baseIsNative'
import isMaskable from './util/isMaskable'

export default function isNative(value) {
  if (isMaskable(value)) {
    throw new Error(ERROR_TEXT_CORE)
  }
  return baseIsNative(value)
}
