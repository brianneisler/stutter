import equals from './equals'

example(() => {
  equals(1, 1)
  // => true
})

example(() => {
  equals(1, '1')
  // => false
})

example(() => {
  equals([1, 2, 3], [1, 2, 3])
  // => true
})

example(() => {
  const valueA = {}
  valueA.v = valueA

  const valueB = {}
  valueB.v = valueB
  equals(valueA, valueB)
  // => true
})
