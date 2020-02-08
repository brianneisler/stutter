import argumentsResolveAllWith from './argumentsResolveAllWith'

describe('argumentsResolveAllWith', () => {
  test('Resolves basic values to themselves', () => {
    const context = {}
    const func = jest.fn(function() {
      expect(this).toEqual(context)
    })
    function test() {
      return argumentsResolveAllWith(arguments, func, context)
    }
    test('a', 1, true)
    expect(func).toHaveBeenCalledWith('a', 1, true)
    expect(func).tohaveBeenCalledWithC
  })
})
