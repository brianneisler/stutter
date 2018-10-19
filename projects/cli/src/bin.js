if (!global._babelPolyfill) {
  require('babel-polyfill')
}
require('source-map-support').install()

const cli = require('vorpal')()
const stutter = require('../stutter')
const modules = require('../modules')

stutter({
  cli: cli,
  modules: modules
}).start()
