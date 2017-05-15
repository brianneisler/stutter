import { ARGS_TAG } from './constants'
import getTag from './getTag'

export default function baseIsArguments(value) {
  return typeof value === 'object' && value !== null && getTag(value) === ARGS_TAG
}
