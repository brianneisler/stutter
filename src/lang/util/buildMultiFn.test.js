import buildMultiFn from './buildMultiFn'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetFunc from './fnGetFunc'

describe('buildMultiFn', () => {
  test('generates a simple multi function from the given disptacher', () => {
    const testFn = definitionToFn(jest.fn(() => {}))
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
    const multiFn = buildMultiFn(dispatcher, {
      multi: false,
      partial: false
    })

    fnCall(multiFn, null, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })

  test('returned multi maintains context when executed', () => {
    const context = {}
    const testFn = definitionToFn(
      jest.fn(function() {
        expect(this).toBe(context)
      })
    )
    const dispatcher = {
      dispatch: () => {
        return {
          fn: testFn,
          partial: false
        }
      }
    }
    const multiFn = buildMultiFn(dispatcher, {
      multi: false,
      partial: false
    })

    fnCall(multiFn, context)
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
  })

  test('handles an array when the multi option is true', () => {
    const testFn = definitionToFn(jest.fn(() => {}))
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
    const multiFn = buildMultiFn(dispatcher, {
      multi: true,
      partial: false
    })

    fnCall(multiFn, null, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })
})
