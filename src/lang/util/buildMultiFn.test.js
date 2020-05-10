import buildMultiFn from './buildMultiFn'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetFunc from './fnGetFunc'

describe('buildMultiFn', () => {
  test('generates a simple multi function from the given disptacher', () => {
    const testContext = createContext({
      callee: this
    })
    const testFn = definitionToFn(jest.fn(() => {}))
    const dispatcher = {
      dispatch: (context, args, meta) => {
        expect(context).toBe(testContext)
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(meta).toEqual({
          dispatcher,
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

    fnCall(multiFn, testContext, null, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })

  test('returned multi maintains context when executed', () => {
    const testContext = createContext({
      callee: this
    })
    const self = {}
    const testFn = definitionToFn(
      jest.fn(function () {
        expect(this).toBe(self)
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

    fnCall(multiFn, testContext, self)
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
  })

  test('handles an array when the multi option is true', () => {
    const testContext = createContext({
      callee: this
    })
    const testFn = definitionToFn(jest.fn(() => {}))
    const dispatcher = {
      dispatch: (context, args, meta) => {
        expect(context).toBe(testContext)
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(meta).toEqual({
          dispatcher,
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

    fnCall(multiFn, testContext, null, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })
})
