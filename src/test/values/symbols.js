import { Symbol } from '../../lang/classes'

const values = [Symbol('a'), Symbol.for('b')]

const symbols = () => values

export default symbols
