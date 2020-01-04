import resolve from './resolve'

example('resolve', () => {
  resolve('foo')
  // => 'foo'

  resolve({
    resolve: () => 'bar'
  })
  // => bar

  resolve({
    resolve: () => ({
      resolve: () => 'bar'
    })
  })
  // => bar
})
