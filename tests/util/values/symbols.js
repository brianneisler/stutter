import { Symbol } from '../../../src/lang/classes'

const values = [Symbol('a'), Symbol.for('b')]

const symbols = () => values

export default symbols
