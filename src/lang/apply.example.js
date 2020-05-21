import apply from './apply'

example(() => {
  const nums = [1, 2, 3, -99, 42, 6, 7]
  apply(Math.max, nums)
  // => 42
})

example(() => {
  const nums = [1, 2, 3, -99, 42, 6, 7]
  apply(nums, Math.min)
  // => -99
})
