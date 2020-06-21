import forEach from './forEach'

example('forEach', () => {
  // eslint-disable-next-line no-console
  const printXPlusFive = (x) => console.log(x + 5)
  forEach(printXPlusFive, [1, 2, 3])
  // => [1, 2, 3]
})
