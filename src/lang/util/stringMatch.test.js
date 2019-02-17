import stringMatch from './stringMatch'

describe('stringMatch', () => {
  test('runs a match on the string', () => {
    expect(Array.from(stringMatch('aba', /a/))).toEqual(['a'])
    expect(Array.from(stringMatch('aba', /a/g))).toEqual(['a', 'a'])
  })
})
