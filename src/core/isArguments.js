import { ARGS_TAG } from './util/constants'
import getTag from './util/getTag'

export default function isArguments(value) {
  return typeof value === 'object' && value !== null && getTag(value) === ARGS_TAG
}
