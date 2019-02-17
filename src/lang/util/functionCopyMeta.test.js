import Number from '../types/Number'
import functionCopyMeta from './functionCopyMeta'
import functionTypify from './functionTypify'

describe('functionCopyMeta', () => {
  test('copies meta to an empty anonymous function', () => {
    const func = functionTypify(
      (n) => {
        return n
      },
      [Number, () => Number]
    )
    const func2 = functionCopyMeta(function() {}, func)
    expect(func2.parameters).toEqual([
      {
        name: 'n',
        type: Number
      }
    ])
    expect(func2.length).toBe(1)
    expect(func2.returns).toBe(Number)
  })

  test('does not error out if copy is called twice', () => {
    const func = functionTypify(
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
