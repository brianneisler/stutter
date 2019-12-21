import defn from './defn'

example('define an Fn without Types', () => {
  const get = defn('get', (prop, value) => value[prop])
  get('a', { a: 'foo' })
  // => 'foo'

  get({}, { a: 'foo' })
  // => undefined
})

example('define an Fn with Types', () => {
  const get = defn('get', [String, Object], (prop, value) => value[prop])
  get('a', { a: 'foo' })
  // => 'foo'

  get({}, { a: 'foo' })
  // => throws `Expected 'prop' parameter to be a String. Instead was given Object {}.`
})
