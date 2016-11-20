import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, makeAst } from '../core'
import { evalNode } from '../evaluator'

const CONST = keyword('const', function* (payload) {
  //TODO
})

const generator = (node) => {

}

function _const(identifiers, ...statements) {
  return makeAst(CONST, {
    identifiers,
    statements
  })
}

export default lang({
  generator,
  keyword: CONST,
  method: _const
})
