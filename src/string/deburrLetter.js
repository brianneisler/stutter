import { DEBURRED_LETTERS } from '../lang/constants'
import propOf from '../lang/propOf'

/**
 * Used to convert Latin-1 Supplement and Latin Extended-A letters to basic Latin letters.
 *
 * @function
 * @since 0.0.21
 * @category string
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 * @example
 *
 * deburrLetter('é')
 * //=> 'e'
 */
const deburrLetter = propOf(DEBURRED_LETTERS)

export default deburrLetter
