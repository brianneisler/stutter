example('Null to String', () => {
  toString(null)
  // => ''
})

example('-0 to String', () => {
  toString(-0)
  // => '-0'
})

example('Array of Numbers to String', () => {
  toString([1, 2, 3])
  // => '1,2,3'
})
