import indexOf from './indexOf'

example(() => {
  indexOf(3, [1, 2, 3, 4])
  // => 2
})

example(() => {
  indexOf(10, [1, 2, 3, 4])
  // => -1
})
