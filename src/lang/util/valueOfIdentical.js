import anyIdenticalWithAny from './anyIdenticalWithAny'

const valueOfIdentical = (valueA, valueB) =>
  anyIdenticalWithAny(valueA.valueOf(), valueB.valueOf())

export default valueOfIdentical
