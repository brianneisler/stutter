export default function defevent() {

}

import identity from './identity'
import isFunction from 'lodash/isFunction'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import invariant from 'invariant'

export default function createAction(creator = identity, metaCreator) {
  invariant(
    isFunction(payloadCreator) || isNull(payloadCreator),
    'Expected payloadCreator to be a function, undefined or null'
  )

  const finalPayloadCreator = isNull(payloadCreator)
    ? identity
    : payloadCreator

  const actionCreator = (...args) => {
    const hasError = args[0] instanceof Error

    const action = {
      type
    }

    const payload = hasError ? args[0] : finalPayloadCreator(...args)
    if (!isUndefined(payload)) {
      action.payload = payload
    }

    if (hasError || payload instanceof Error) {
      // Handle FSA errors where the payload is an Error object. Set error.
      action.error = true
    }

    if (isFunction(metaCreator)) {
      action.meta = metaCreator(...args)
    }

    return action
  }

  actionCreator.toString = () => type.toString()

  return actionCreator
}


import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import isFunction from './isFunction'
import isNumber from './isNumber'
import recompose from './recompose'


const enhance = recompose(
  withCurry(2),
  withFns({
    expect,
    isFunction,
    isNumber
  })
)

const create = enhance(({ expect, isFunction, isNumber }) => fn((creator) => {
  expect(
    isFunction(func),
    `${func} is not a function`
  )
  expect(
    isNumber(n),
    `${n} is not a number`
  )
  return (...args) => {
    if (--n < 1) {
      return func.apply(this, args)
    }
  }
}))

export default after
