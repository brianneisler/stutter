import always from './always'

example('always', () => {
  const foo = always('foo')
  foo()
  // => 'foo'
})
