import buildFn from './buildFn'
import dispatcherToMultiFn from './dispatcherToMultiFn'
import fnCall from './fnCall'

describe('dispatcherToMultiFn', () => {
  test('generates a simple multi function from the given disptacher', () => {
    const testFn = buildFn(jest.fn(() => {}))
    const dispatcher = {
      dispatch: (args, options) => {
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(options).toEqual({
          multi: false,
          partial: false
        })
        return {
          fn: testFn,
          partial: false
        }
      }
    }
    const multiFn = dispatcherToMultiFn(dispatcher, {
      multi: false,
      partial: false
    })

    fnCall(multiFn, 'foo', 'bar')
    expect(testFn.func).toHaveBeenCalledTimes(1)
    expect(testFn.func).toHaveBeenCalledWith('foo', 'bar')
  })

  test('handles an array when the multi option is true', () => {
    const testFn = buildFn(jest.fn(() => {}))
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
            fn: testFn,
            partial: false
          }
        ]
      }
    }
    const multiFn = dispatcherToMultiFn(dispatcher, {
      multi: true,
      partial: false
    })

    fnCall(multiFn, 'foo', 'bar')
    expect(testFn.func).toHaveBeenCalledTimes(1)
    expect(testFn.func).toHaveBeenCalledWith('foo', 'bar')
  })
})
