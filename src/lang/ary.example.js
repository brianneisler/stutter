import ary from './ary'

example(() => {
  // eslint-disable-next-line id-length
  const takesTwoArgs = (a, b) => [a, b]
  takesTwoArgs.length
  // => 2

  takesTwoArgs(1, 2)
  // => [1, 2]

  const takesOneArg = ary(1, takesTwoArgs)
  takesOneArg.length
  // => 1

  // Only `n` arguments are passed to the wrapped function
  takesOneArg(1, 2)
  // => [1, undefined]
})
