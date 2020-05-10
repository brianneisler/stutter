import { FN } from '../constants/Symbol'
import definitionToFn from './definitionToFn'
import functionDefineSymbolFn from './functionDefineSymbolFn'

describe('functionDefineSymbolFn', () => {
  test('Changes the @@fn of a given function', () => {
    const fn = definitionToFn(() => {})
    const func = functionDefineSymbolFn(() => {}, fn)

    expect(func[FN]).toBe(fn)
  })
})
