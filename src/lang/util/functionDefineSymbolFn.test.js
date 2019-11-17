import SYMBOL_FN from '../constants/SYMBOL_FN'
import definitionToFn from './definitionToFn'
import functionDefineSymbolFn from './functionDefineSymbolFn'

describe('functionDefineSymbolFn', () => {
  test('Changes the @@fn of a given function', () => {
    const fn = definitionToFn(() => {})
    const func = functionDefineSymbolFn(() => {}, fn)

    expect(func[SYMBOL_FN]).toBe(fn)
  })
})
