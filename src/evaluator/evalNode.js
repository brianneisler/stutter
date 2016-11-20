import _ from 'mudash'
import { getKeyword } from '../core'

export default async function evalNode(node) {
  const runtimeId = _.uniqueId()
  const { evaluator, keyword, payload } = getKeyword(node)
}
