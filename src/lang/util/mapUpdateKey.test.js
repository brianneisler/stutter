import mapUpdateKey from './mapUpdateKey'

describe('mapUpdateKey', () => {
  it('updates an existing Key on a Map and returns a new copy of the Map', () => {
    const map = new Map([
      ['a', 1],
      ['b', 1],
      ['c', 3]
    ])
    const result = mapUpdateKey(map, 'b', (value) => value + 1)

    expect(result).toEqual(
      new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3]
      ])
    )
    expect(map).toEqual(
      new Map([
        ['a', 1],
        ['b', 1],
        ['c', 3]
      ])
    )
  })

  it('updating a non-existing Key on a Map sets the Key', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3]
    ])
    const result = mapUpdateKey(map, 'd', () => 4)

    expect(result).toEqual(
      new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3],
        ['d', 4]
      ])
    )
    expect(map).toEqual(
      new Map([
        ['a', 1],
        ['b', 2],
        ['c', 3]
      ])
    )
  })
})
