import Any from '../types/Any'
import Number from '../types/Number'
import String from '../types/String'
import definitionsToFns from './definitionsToFns'

describe('definitionsToFns', () => {
  test('parameterized multipe functions with fixed parameters', () => {
    const fns = definitionsToFns([
      [Number, String],
      (num, str) => {
        return str
      },

      [Any],
      (any) => {
        return any
      }
    ])
    expect(fns).toBeInstanceOf(Array)
    expect(fns.length).toBe(2)
    expect(fns[0].parameters).toEqual([
      {
        name: 'num',
        type: Number
      },
      {
        name: 'str',
        type: String
      }
    ])

    expect(fns[1].parameters).toEqual([
      {
        name: 'any',
        type: Any
      }
    ])
  })

  test('parameterizes functions with defaults', () => {
    const fns = definitionsToFns([
      (foo, bar) => {
        return bar
      }
    ])
    expect(fns).toBeInstanceOf(Array)
    expect(fns.length).toBe(1)
    expect(fns[0].parameters).toEqual([
      {
        name: 'foo',
        type: Any
      },
      {
        name: 'bar',
        type: Any
      }
    ])
  })
})
