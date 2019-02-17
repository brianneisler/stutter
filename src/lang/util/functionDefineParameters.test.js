import Any from '../types/Any'
import functionDefineParameters from './functionDefineParameters'

describe('functionDefineParameters', () => {
  test('defines parameters and sets length', () => {
    const func = functionDefineParameters(
      (argA, argB) => {
        return argB
      },
      [{ name: 'argA', type: Any }, { name: 'argB', type: Any }]
    )
    expect(func.parameters).toEqual([{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
    expect(func.length).toBe(2)
  })

  test('overwrites length regardless of original length', () => {
    const func = functionDefineParameters(
      (argA, argB, argC) => {
        return argC
      },
      [{ name: 'argA', type: Any }, { name: 'argB', type: Any }]
    )
    expect(func.parameters).toEqual([{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
    expect(func.length).toBe(2)
  })
})
