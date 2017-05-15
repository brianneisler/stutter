import baseFor from './util/baseFor'
import fn from './fn'

const _for = fn((iteratee, data) => baseFor(data, iteratee))

export default _for
