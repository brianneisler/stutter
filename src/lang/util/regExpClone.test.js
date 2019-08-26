import regExpClone from './regExpClone'

describe('regExpClone', () => {
  test('clones a RegExp', () => {
    const regExp = regExpClone(/^foo$/)
    expect(regExp.test('foo')).toBe(true)
    expect(regExp.source).toBe('^foo$')
  })
})
