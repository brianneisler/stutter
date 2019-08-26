import Any from '../types/Any'
import Number from '../types/Number'
import String from '../types/String'
import definitionsToParameterizedFunctions from './definitionsToParameterizedFunctions'

describe('definitionsToParameterizedFunctions', () => {
  test('parameterized multipe functions with fixed parameters', () => {
    const funcs = definitionsToParameterizedFunctions([
      [Number, String],
      (num, str) => {
        return str
      },

      [Any],
      (any) => {
        return any
      }
    ])
    expect(funcs).toBeInstanceOf(Array)
    expect(funcs.length).toBe(2)
    expect(funcs[0].parameters).toEqual([
      {
        name: 'num',
        type: Number
      },
      {
        name: 'str',
        type: String
      }
    ])
    expect(funcs[0].length).toBe(2)

    expect(funcs[1].parameters).toEqual([
      {
        name: 'any',
        type: Any
      }
    ])
    expect(funcs[1].length).toBe(1)
  })

  test('parameterizes functions with defaults', () => {
    const funcs = definitionsToParameterizedFunctions([
      (foo, bar) => {
        return bar
      }
    ])
    expect(funcs).toBeInstanceOf(Array)
    expect(funcs.length).toBe(1)
    expect(funcs[0].parameters).toEqual([
      {
        name: 'foo',
        type: Any
      },
      {
        name: 'bar',
        type: Any
      }
    ])
    expect(funcs[0].length).toBe(2)
  })
})
