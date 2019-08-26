import Any from '../types/Any'
import String from '../types/String'
import functionDefineReturns from './functionDefineReturns'

describe('functionDefineReturns', () => {
  test('defines the `returns` property', () => {
    const func = functionDefineReturns((argA, argB) => {
      return argB
    }, Any)
    expect(func.returns).toBe(Any)
  })

  test('overwrites returns regardless of original value', () => {
    let func = functionDefineReturns((argA, argB) => {
      return argB
    }, Any)
    func = functionDefineReturns(func, String)
    expect(func.returns).toBe(String)
  })
})
