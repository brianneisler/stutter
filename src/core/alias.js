import _ from 'mudash'
import { KEYWORD } from '../core'

export default function alias(keyword, name) {
  return {
    ...keyword,
    [KEYWORD]: name
  }
}
