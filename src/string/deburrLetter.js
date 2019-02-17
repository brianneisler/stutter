import { DEBURRED_LETTERS } from '../constants'
import getPropOf from '../data/getPropOf'

/**
 * Used to convert Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 *
 * @function
 * @since 0.0.21
 * @category string
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 * @example
 * deburrLetter('é')
 * //=> 'e'
 */
const deburrLetter = getPropOf(DEBURRED_LETTERS)

export default deburrLetter
