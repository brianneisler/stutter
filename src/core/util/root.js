import freeGlobal from './freeGlobal'
import freeSelf from './freeSelf'
const root = freeGlobal || freeSelf || Function('return this')()
export default root
