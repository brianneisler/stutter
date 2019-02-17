import dispatcherToMultiFunction from './dispatcherToMultiFunction'

describe('dispatcherToMultiFunction', () => {
  test('generates a simple multi function from the given disptacher', () => {
    const testFunction = jest.fn(() => {})
    const dispatcher = {
      dispatch: (args, options) => {
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(options).toEqual({
          multi: false,
          partial: false
        })
        return {
          func: testFunction
        }
      }
    }
    const multiFunction = dispatcherToMultiFunction(dispatcher, {
      multi: false,
      partial: false
    })

    multiFunction('foo', 'bar')
    expect(testFunction).toHaveBeenCalledTimes(1)
    expect(testFunction).toHaveBeenCalledWith('foo', 'bar')
  })

  test('handles an array when the multi option is true', () => {
    const testFunction = jest.fn(() => {})
    const dispatcher = {
      dispatch: (args, options) => {
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(options).toEqual({
          multi: true,
          partial: false
        })
        return [
          {
            func: testFunction
          }
        ]
      }
    }
    const multiFunction = dispatcherToMultiFunction(dispatcher, {
      multi: true,
      partial: false
    })

    multiFunction('foo', 'bar')
    expect(testFunction).toHaveBeenCalledTimes(1)
    expect(testFunction).toHaveBeenCalledWith('foo', 'bar')
  })
})
