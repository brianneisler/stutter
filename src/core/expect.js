import baseExpect from './util/baseExpect'
import fn from './fn'

const expect = fn(baseExpect, 2)

export default expect
