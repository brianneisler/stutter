import SYMBOL_FUNCTIONS from '../constants/SYMBOL_FUNCTIONS'
const hasFunctionsSymbol = (value) => !!value && !!value[SYMBOL_FUNCTIONS]
export default hasFunctionsSymbol
