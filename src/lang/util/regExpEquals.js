import anyIsRegExp from './anyIsRegExp'

const regExpEquals = (regExp, any) => {
  if (!anyIsRegExp(any)) {
    return false
  }
  return (
    regExp.source === any.source &&
    regExp.global === any.global &&
    regExp.ignoreCase === any.ignoreCase &&
    regExp.multiline === any.multiline &&
    regExp.sticky === any.sticky &&
    regExp.unicode === any.unicode
  )
}

export default regExpEquals
