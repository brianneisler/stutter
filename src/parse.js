import _ from 'mudash'
import _path from 'path'
import { parseCode } from './parser'

export default function parse(code, options) {
  const { path, type } = options
  if (_.isNil(type) && !_.isNil(path)) {
    const ext = _path.extname(path)
    options = {
      ...options,
      type: ext.substr(1)
    }
  }
  return parseCode(code, options)
}
