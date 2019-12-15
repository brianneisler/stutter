import contains from './contains'

describe('contains', () => {
  test('returns true if value exists in array', () => {
    expect(contains('a', ['a', 'b', 'c'])).toBe(true)
  })

  test('upgrades to a Promise when a Promise is received as a parameter', async () => {
    expect(await contains(Promise.resolve(1), Promise.resolve([1, 2, 3]))).toBe(true)
  })

  test('returns true if value exists in array using predicate', () => {
    expect(
      contains((value, collectionValue) => value === collectionValue, 'a', ['a', 'b', 'c'])
    ).toBe(true)
  })

  test('upgrades to a Promise when a Promise is received as a parameter using predicate', async () => {
    expect(
      await contains(
        (value, collectionValue) => value === collectionValue,
        Promise.resolve(1),
        Promise.resolve([1, 2, 3])
      )
    ).toBe(true)
  })

  test('upgrades to a Promise when async predicate is used', async () => {
    expect(
      await contains(
        async (value, collectionValue) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(value === collectionValue)
            }, 0)
          }),
        1,
        [1, 2, 3]
      )
    ).toBe(true)
  })
})
