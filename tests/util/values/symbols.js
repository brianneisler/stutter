import { Symbol } from '../../../src/lang/util/js'

const values = [Symbol('a'), Symbol.for('b')]

const symbols = () => values

export default symbols
