import objectShallowEquals from './objectShallowEquals'

describe('objectShallowEquals', () => {
  test('objectShallowEquals returns true if arguments are equal, without comparing properties', () => {
    const throwOnAccess = {
      get foo() {
        throw new Error('Property was accessed')
      }
    }
    expect(objectShallowEquals(throwOnAccess, throwOnAccess)).toBe(true)
  })

  test('objectShallowEquals returns true if arguments fields are equal', () => {
    expect(
      objectShallowEquals(
        { a: 1, b: 2, c: undefined },
        { a: 1, b: 2, c: undefined }
      )
    ).toBe(true)

    expect(
      objectShallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })
    ).toBe(true)

    const object = {}
    expect(
      objectShallowEquals({ a: 1, b: 2, c: object }, { a: 1, b: 2, c: object })
    ).toBe(true)
  })

  test('objectShallowEquals returns false if either argument is null or undefined', () => {
    expect(objectShallowEquals(null, { a: 1, b: 2 })).toBe(false)
    expect(objectShallowEquals({ a: 1, b: 2 }, null)).toBe(false)
  })

  test('objectShallowEquals returns false if first argument has too many keys', () => {
    expect(objectShallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })).toBe(
      false
    )
  })

  test('objectShallowEquals returns false if second argument has too many keys', () => {
    expect(objectShallowEquals({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toBe(
      false
    )
  })

  test('objectShallowEquals returns false if arguments have different keys', () => {
    expect(
      objectShallowEquals(
        { a: 1, b: 2, c: undefined },
        { a: 1, bb: 2, c: undefined }
      )
    ).toBe(false)
  })

  test('objectShallowEquals returns false if arguments have different values', () => {
    expect(
      objectShallowEquals({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 4 })
    ).toBe(false)
  })
})
