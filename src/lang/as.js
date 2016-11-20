import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, makeAst } from '../core'
import { evalNode } from '../evaluator'

const AS = keyword('as', function* (payload) {
  //TODO
})

const generator = (node) => {

}

function _as(name) {
  return makeAst(AS, {
    name
  })
}

export default lang({
  generator,
  keyword: AS,
  method: _as
})
