import _ from 'mudash'
import invariant from 'invariant'
import { isKeyword, keyword, lang, makeAst } from '../core'
import { evalNode } from '../evaluator'

const CALL = keyword('call', function* (payload) {
  const { context, func, args } = yield* evalCallPayload(payload)
  //TODO
})

const generator = (node) => {
  // const { payload } = getKeyword(node)
  // return `call()`
}

function* evalCallPayload(payload) {
  invariant(!_.isNil(fn), 'call: argument func is undefined')

  let context = null
  if (_.isArray(func)) {
    [context, func] = func
  } else if (_.has(func, 'func')) {
    ({context, func} = func)
  }
  //TODO BRN: This test is not exactly accurate since we want to support creating call entries that could call the result of a promise, generator, or another ast node
  //check(fn, is.func, `${meth}: argument ${fn} is not a function`)

  return { context, func, args }
}

function call(func, ...args) {
  return makeAst(CALL, {
    args,
    func
  })
}

export default lang({
  generator,
  keyword: CALL,
  method: call
})
