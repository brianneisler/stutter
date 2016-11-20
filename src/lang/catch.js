import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, makeAst } from '../core'
import { evalNode } from '../evaluator'

const CATCH = keyword('catch', function* (payload) {
  //TODO
})

const generator = (node) => {

}

function _catch(...statements) {
  return makeAst(THREAD, {
    statements
  })
}

export default lang({
  generator,
  keyword: CATCH,
  method: _catch
})
