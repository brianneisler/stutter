import SYMBOL_FN from '../constants/SYMBOL_FN'
import buildFn from './buildFn'
import functionDefineSymbolFn from './functionDefineSymbolFn'

describe('functionDefineSymbolFn', () => {
  test('defines the @@fn symbol', () => {
    const fn = buildFn((argA, argB) => {
      return argB
    })
    const func = functionDefineSymbolFn(() => {}, fn)
    expect(func[SYMBOL_FN]).toBe(fn)
  })
})
