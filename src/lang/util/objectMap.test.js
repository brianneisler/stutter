import objectMap from './objectMap'

describe('objectMap', () => {
  test('map over Object', () => {
    const iteratee = jest.fn()
    const object = { a: 1, b: 2 }
    objectMap(object, iteratee)
    expect(iteratee).toHaveBeenNthCalledWith(1, 1, 'a', object)
    expect(iteratee).toHaveBeenNthCalledWith(2, 2, 'b', object)
  })
})
