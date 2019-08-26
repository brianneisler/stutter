import assocIndex from './assocIndex'

describe('assocIndex', () => {
  test('assocIndex to a string', () => {
    const string = 'foo'
    expect(assocIndex(0, 'b', string).toEqual('boo')
    expect(assocIndex(1, 'b', string).toEqual('fbo')
    expect(assocIndex(2, 'b', string).toEqual('fob')
  })

  test('throws when assocIndex indexe is a string and value is not a character', () => {
    expect(() => assocIndex(0, 'boo', 'foo').toThrow(TypeError)
  })
})
