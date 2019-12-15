import concat from './concat'

describe('concat', () => {
  test('concats string values', () => {
    expect(concat('ABC', 'DEF')).toBe('ABCDEF')
  })

  test('concats empty object', () => {
    expect(concat('ABC', {})).toBe('ABC')
    expect(concat([4, 5, 6], {})).toEqual([4, 5, 6])
  })

  test('concats array values', () => {
    expect(concat([4, 5, 6], [1, 2, 3])).toEqual([4, 5, 6, 1, 2, 3])
  })

  test('concats empty arrays into a single empty array', () => {
    expect(concat([], [])).toEqual([])
  })

  test('curries the method', () => {
    const concatA = concat(['a'])
    expect(concatA).toBeInstanceOf(Function)

    expect(concatA(['b'])).toEqual(['a', 'b'])
  })

  test('upgrades to a Promise when a Promise is received as a parameter', async () => {
    expect(await concat(Promise.resolve([4, 5, 6]), Promise.resolve([1, 2, 3]))).toEqual([
      4,
      5,
      6,
      1,
      2,
      3
    ])
  })
})
