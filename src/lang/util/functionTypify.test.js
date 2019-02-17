import * as js from './js'
import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Number from '../types/Number'
import String from '../types/String'
import functionTypify from './functionTypify'
import functionsToMultiFunction from './functionsToMultiFunction'

describe('functionTypify', () => {
  test('function remains a function', () => {
    const func = functionTypify(
      (n) => {
        return n
      },
      [Number, () => Number]
    )
    expect(func(2)).toBe(2)
  })

  test('typifies a function with fixed parameters', () => {
    const func = functionTypify(
      (n) => {
        return n
      },
      [Number, () => Number]
    )
    expect(func.parameters).toEqual([
      {
        name: 'n',
        type: Number
      }
    ])
    expect(func.returns).toBe(Number)
    expect(func.length).toBe(1)
  })

  test('typifies a function with default type Any if no type definitions are provided', () => {
    const func = functionTypify((foo, bar) => {
      return bar
    })
    expect(func.parameters).toEqual([
      {
        name: 'foo',
        type: Any
      },
      {
        name: 'bar',
        type: Any
      }
    ])
    expect(func.returns).toBe(Any)
    expect(func.length).toBe(2)
  })

  test('typifies a function with default return type Any if no type return type definition is provided', () => {
    const func = functionTypify(
      (foo, bar) => {
        return bar
      },
      [String, String]
    )
    expect(func.parameters).toEqual([
      {
        name: 'foo',
        type: String
      },
      {
        name: 'bar',
        type: String
      }
    ])
    expect(func.returns).toBe(Any)
    expect(func.length).toBe(2)
  })

  test('Returns original function if already parameterized and no parameters are provided', () => {
    const func = functionTypify(
      (n) => {
        return n
      },
      [Number, () => Number]
    )
    const result = functionTypify(func)
    expect(result).toBe(func)
  })

  test('Returns original function if func is a multi function and no parameters are provided', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String, () => String]
    )
    const mFunc = functionsToMultiFunction([func])
    const result = functionTypify(mFunc)
    expect(result).toBe(mFunc)
  })

  test('Throws error if trying to parameterize an already parameterized function', () => {
    const func = functionTypify(
      (n) => {
        return n
      },
      [Number]
    )
    expect(() => {
      functionTypify(func, [Number])
    }).toThrow(Error)
  })

  test('Throws error if trying to parameterize a multi function', () => {
    const func = functionTypify(
      (num, str) => {
        return str
      },
      [Number, String]
    )
    const mFunc = functionsToMultiFunction([func])
    expect(() => {
      functionTypify(mFunc, [Number])
    }).toThrow(Error)
  })

  test('Throws error if given a non Type in the paramTypes', () => {
    const Foo = function() {}
    expect(() => {
      functionTypify(
        (num, str) => {
          return str
        },
        [Number, Foo]
      )
    }).toThrow(Error)
  })

  test('Parameters types are defaulted to Any if not specified', () => {
    const func = functionTypify(
      (foo, bar) => {
        return bar
      },
      [Number]
    )
    expect(func.parameters).toEqual([
      {
        name: 'foo',
        type: Number
      },
      {
        name: 'bar',
        type: Any
      }
    ])
    expect(func.length).toBe(2)
  })

  test('Types are looked up by class if they are not referenced directly', () => {
    const func = functionTypify(
      (foo, bar) => {
        return bar
      },
      [js.Number, js.String, () => js.Boolean]
    )
    expect(func.parameters).toEqual([
      {
        name: 'foo',
        type: Number
      },
      {
        name: 'bar',
        type: String
      }
    ])
    expect(func.returns).toBe(Boolean)
    expect(func.length).toBe(2)
  })

  test('Parameters name are defaulted to arg[Idx] if not specified', () => {
    const func = functionTypify(
      (foo, ...rest) => {
        return rest
      },
      [Number, Number]
    )
    expect(func.parameters).toEqual([
      {
        name: 'foo',
        type: Number
      },
      {
        name: 'arg1',
        type: Number
      }
    ])
    expect(func.length).toBe(2)
  })
})
