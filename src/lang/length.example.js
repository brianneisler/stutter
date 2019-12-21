import length from './length'

example('get the length from an Array', () => {
  length([])
  // => 0

  length([1, 2, 3])
  // => 3
})
