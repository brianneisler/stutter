import getProperty from './getProperty'

example('getProperty', () => {
  getProperty('a', { a: { b: 2 } })
  // => { b: 2 }
})
