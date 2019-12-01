import arraySplice from './arraySplice'

describe('arraySplice', () => {
  test('splices from an array', () => {
    expect(arraySplice(['a', 'b', 'c', 'd', 'e'], 1, 3)).toEqual(['a', 'e'])
  })
})
