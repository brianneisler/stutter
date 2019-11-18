import stringToPath from './stringToPath'

describe('stringToPath', () => {
  test('converts simple string to path array ', () => {
    expect(stringToPath('abc')).toEqual(['abc'])
  })

  test('converts dot characters to multiple path segments', () => {
    expect(stringToPath('abc.def.ghi')).toEqual(['abc', 'def', 'ghi'])
  })
})
