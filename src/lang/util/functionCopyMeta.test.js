import Number from '../types/Number'
import SYMBOL_META from '../constants/SYMBOL_META'
import functionCopyMeta from './functionCopyMeta'
import functionDefineTypes from './functionDefineTypes'
import objectDefineProperty from './objectDefineProperty'

describe('functionCopyMeta', () => {
  test('copies meta to an empty anonymous function', () => {
    const func = functionDefineTypes(
      (n) => {
        return n
      },
      [Number, () => Number]
    )
    const testMeta = {}
    objectDefineProperty(func, SYMBOL_META, { value: testMeta })

    const func2 = functionCopyMeta(function() {}, func)
    expect(func2.parameters).toEqual([
      {
        name: 'n',
        type: Number
      }
    ])
    expect(func2.length).toBe(1)
    expect(func2.returns).toBe(Number)
    expect(func2[SYMBOL_META]).toBe(testMeta)
  })

  test('does not error out if copy is called twice', () => {
    const func = functionDefineTypes(
      (n) => {
        return n
      },
      [Number]
    )
    const func2 = functionCopyMeta(function() {}, func)
    expect(() => {
      functionCopyMeta(func2, func)
    }).not.toThrow()
  })
})
