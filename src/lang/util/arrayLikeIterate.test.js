import arrayLikeIterate from './arrayLikeIterate'

describe('arrayLikeIterate', () => {
  test('iterates array until done is true', () => {
    const values = ['a', 'b', 'c', 'd', null, 'f']
    const acc = []
    const result = arrayLikeIterate(values, (next) => {
      acc.push(next)
      return {
        ...next,
        done: !next.value,
        value: acc
      }
    })
    expect(result).toEqual([
      {
        done: false,
        index: 0,
        pik: 0,
        prev: undefined,
        value: 'a'
      },
      {
        done: false,
        index: 1,
        pik: 1,
        prev: {
          done: false,
          index: 0,
          pik: 0,
          value: 'a'
        },
        value: 'b'
      },
      {
        done: false,
        index: 2,
        pik: 2,
        prev: {
          done: false,
          index: 1,
          pik: 1,
          value: 'b'
        },
        value: 'c'
      },
      {
        done: false,
        index: 3,
        pik: 3,
        prev: {
          done: false,
          index: 2,
          pik: 2,
          value: 'c'
        },
        value: 'd'
      },
      {
        done: false,
        index: 4,
        pik: 4,
        prev: {
          done: false,
          index: 3,
          pik: 3,
          value: 'd'
        },
        value: null
      }
    ])
  })

  test('upgrades to Promise when async iteratee is used', async () => {
    const values = ['a', 'b', 'c', 'd', null, 'f']
    const acc = []
    let result = arrayLikeIterate(
      values,
      (next) =>
        new Promise((resolve) => {
          setTimeout(() => {
            acc.push(next)
            resolve({
              ...next,
              done: !next.value,
              value: acc
            })
          }, 2000 - next.pik * 500) // NOTE BRN: delay first using greatest time to test order of iteration
        })
    )
    expect(result).toBeInstanceOf(Promise)
    result = await result
    expect(result).toEqual([
      {
        done: false,
        index: 0,
        pik: 0,
        prev: undefined,
        value: 'a'
      },
      {
        done: false,
        index: 1,
        pik: 1,
        prev: {
          done: false,
          index: 0,
          pik: 0,
          value: 'a'
        },
        value: 'b'
      },
      {
        done: false,
        index: 2,
        pik: 2,
        prev: {
          done: false,
          index: 1,
          pik: 1,
          value: 'b'
        },
        value: 'c'
      },
      {
        done: false,
        index: 3,
        pik: 3,
        prev: {
          done: false,
          index: 2,
          pik: 2,
          value: 'c'
        },
        value: 'd'
      },
      {
        done: false,
        index: 4,
        pik: 4,
        prev: {
          done: false,
          index: 3,
          pik: 3,
          value: 'd'
        },
        value: null
      }
    ])
  }, 10000)

  test('iterates a string', () => {
    const value = 'abcd'
    const acc = []
    const result = arrayLikeIterate(value, (next) => {
      acc.push(next.value)
      return {
        ...next,
        done: !next.value,
        value: acc
      }
    })
    expect(result).toEqual(['a', 'b', 'c', 'd', undefined])
  })
})
