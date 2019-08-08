import Any from '../types/Any'
import buildFn from './buildFn'
import fnSetParameters from './fnSetParameters'

describe('fnSetParameters', () => {
  test('sets parameters', () => {
    const fn = fnSetParameters(
      buildFn((argA, argB) => {
        return argB
      }),
      [{ name: 'argA', type: Any }, { name: 'argB', type: Any }]
    )
    expect(fn.parameters).toEqual([{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
  })

  test('overwrites parameters regardless of original value', () => {
    let fn = buildFn(
      (argA, argB, argC) => {
        return argC
      },
      [Any]
    )
    fn = fnSetParameters(fn, [{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
    expect(fn.parameters).toEqual([{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
  })
})
