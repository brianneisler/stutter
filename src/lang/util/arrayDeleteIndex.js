import arraySplice from './arraySplice'

/**
 * This function is *mutable*
 *
 * @param {*} array
 * @param {*} index
 */
const arrayDeleteIndex = (array, index) => arraySplice(array, index, 1)

export default arrayDeleteIndex
