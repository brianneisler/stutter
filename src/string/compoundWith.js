/**
 * .
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
const compoundWith = (callback, string) => {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '')
  }
}
