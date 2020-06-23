import noop from './noop'

describe('lang.noop', () => {
  example('returns null by default', () => {
    noop()
    // => null
  })
})
