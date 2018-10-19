import SYMBOL_TYPE from '../constants/SYMBOL_TYPE'
const hasTypeSymbol = (value) => !!value && !!value[SYMBOL_TYPE]
export default hasTypeSymbol
