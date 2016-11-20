import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, PAYLOAD } from '../core'
import { evalNode } from '../evaluator'

const JS = keyword('js', function* (payload) {
  //TODO
})

const generator = (node) => {

}

function js(code) {
  return {
    ...CONST,
    [PAYLOAD]: {
      code
    }
  }
}

export default lang({
  generator,
  keyword: JS,
  method: js
})
