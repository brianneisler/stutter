import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, makeAst } from '../core'
import { evalNode } from '../evaluator'

const THREAD = keyword('thread', function* (payload) {
  //TODO
})

const generator = (node) => {

}

function thread(...statements) {
  return makeAst(THREAD, {
    statements
  })
}

export default lang({
  generator,
  keyword: THREAD,
  method: thread
})
