import { FN } from '../constants/Symbol'
import Context from '../classes/Context'
import ImmutableList from '../classes/ImmutableList'
import ImmutableStack from '../classes/ImmutableStack'
import buildMultiFn from './buildMultiFn'
import createContext from './createContext'
import definitionToFn from './definitionToFn'
import fnCall from './fnCall'
import fnGetFunc from './fnGetFunc'

describe('buildMultiFn', () => {
  test('generates a simple multi function from the given disptacher', () => {
    let multiFn
    const testContext = createContext({})
    const testFn = definitionToFn(jest.fn(() => {}))
    const dispatcher = {
      dispatch: (context, args, meta) => {
        expect(context).toMatchObject({
          callee: multiFn[FN],
          callstack: ImmutableStack([
            { callee: undefined, method: 'dispatch', target: multiFn[FN] }
          ])
        })
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
    multiFn = buildMultiFn(dispatcher, {
      multi: false,
      partial: false
    })

    fnCall(multiFn, testContext, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })

  test('returned multi maintains context when executed', () => {
    const self = {}
    const testContext = createContext({
      callee: this,
      jsContext: self
    })
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

    fnCall(multiFn, testContext)
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
  })

  test('handles an ImmutableList when the multi option is true', () => {
    const testContext = createContext({})
    const testFn = definitionToFn(jest.fn(() => {}))
    const dispatcher = {
      dispatch: (context, args, meta) => {
        expect(context).toBeInstanceOf(Context)
        expect(args[0]).toBe('foo')
        expect(args[1]).toBe('bar')
        expect(meta).toEqual({
          dispatcher,
          multi: true,
          partial: false
        })
        return ImmutableList([
          {
            fn: testFn,
            partial: false
          }
        ])
      }
    }
    const multiFn = buildMultiFn(dispatcher, {
      multi: true,
      partial: false
    })

    fnCall(multiFn, testContext, 'foo', 'bar')
    expect(fnGetFunc(testFn)).toHaveBeenCalledTimes(1)
    expect(fnGetFunc(testFn)).toHaveBeenCalledWith('foo', 'bar')
  })
})
