import baseForRight from './util/baseForRight'
import fn from './fn'

const forRight = fn((iteratee, data) => baseForRight(data, iteratee))

export default forRight
