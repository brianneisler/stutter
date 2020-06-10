import regExpEquals from './regExpEquals'

describe('regExpEquals', () => {
  test('returns true for two RegExps that are the same but different instances', () => {
    expect(regExpEquals(/foo/, /foo/)).toBe(true)
  })

  test('returns false for different RegExps', () => {
    expect(regExpEquals(/foo/, /bar/)).toBe(false)
  })
})
