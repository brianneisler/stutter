import Path from './js/Path'
import stringToPath from './stringToPath'

describe('stringToPath', () => {
  test('converts simple string to path array ', () => {
    expect(stringToPath('abc')).toEqual(new Path(['abc']))
  })

  test('converts dot characters to multiple path segments', () => {
    expect(stringToPath('abc.def.ghi')).toEqual(new Path(['abc', 'def', 'ghi']))
  })
})
