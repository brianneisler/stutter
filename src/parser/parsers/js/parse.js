import _eval from '../../../../eval/eval'
import { getMethods } from '../../../core'

export default function parse(js, options) {
  const { lang, path } = options
  const context = getMethods(lang)
  return _eval(js, context, path)
}
