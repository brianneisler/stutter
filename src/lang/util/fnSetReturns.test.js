import Any from '../types/Any'
import String from '../types/String'
import buildFn from './buildFn'
import fnSetReturns from './fnSetReturns'

describe('fnSetReturns', () => {
  test('defines the `returns` property', () => {
    const fn = fnSetReturns(
      buildFn((argA, argB) => {
        return argB
      }),
      Any
    )
    expect(fn.returns).toBe(Any)
  })

  test('overwrites returns regardless of original value', () => {
    let fn = buildFn(
      (argA, argB) => {
        return argB
      },
      [() => Any]
    )
    fn = fnSetReturns(fn, String)
    expect(fn.returns).toBe(String)
  })
})
