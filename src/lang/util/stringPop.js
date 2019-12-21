const stringPop = (string) => {
  if (string.length === 0) {
    return string
  }
  return string.substring(0, string.length - 1)
}

export default stringPop
