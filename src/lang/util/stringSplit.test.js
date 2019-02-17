import stringSplit from './stringSplit'

describe('stringSplit', () => {
  test('split with no parameters returns an array with original string', () => {
    expect(stringSplit('foo')).toEqual(['foo'])
  })
})
