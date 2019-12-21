import def from './def'
import fn from './fn'

example('define an Fn with name and description', () => {
  def('foo.bar', 'My foo bar function', fn(() => {}))
})

example('define an Fn with a name only', () => {
  def('foo.bar', fn(() => {}))
})
