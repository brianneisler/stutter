import walk from './walk'

example(() => {
  const result = []
  walk((value) => result.push(value), {
    a: {
      b: 'b'
    }
  })
  // eslint-disable-next-line no-console
  console.log(result)
  // => [
  //  'b',
  //  { b: 'b' },
  //  { a: { b: 'b' } }
  // ]
})
