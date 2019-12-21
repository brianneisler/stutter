import append from './append'

example('append to an Array', () => {
  append('tests', ['write', 'more'])
  // => ['write', 'more', 'tests']
})

example('append to an empty Array', () => {
  append('tests', [])
  // => ['tests']
})

example('append an Array as an item to an Array', () => {
  append(['tests'], ['write', 'more'])
  // => ['write', 'more', ['tests']]
})

example('append a Character to a String', () => {
  append('s', 'write more test')
  // => 'write more tests'
})
