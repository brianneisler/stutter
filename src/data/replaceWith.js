const baseReplaceWith = (pattern, replacement, value) => {}

const replaceWith = curry(defn('replaceWith', baseReplaceWith))

export default replaceWith
