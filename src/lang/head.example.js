import head from './head'

example('head', () => {
  head(['fi', 'fo', 'fum'])
  // => 'fi'

  head([])
  // => undefined

  head('abc')
  // => 'a'

  head('')
  // => undefined
})
