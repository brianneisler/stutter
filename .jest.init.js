import * as extensions from './tests/util/extensions'

expect.extend(extensions)

// eslint-disable-next-line no-underscore-dangle
if (!global._babelPolyfill) {
  // eslint-disable-next-line global-require
  require('@babel/polyfill')
}

