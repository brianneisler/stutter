import * as js from './js'
import { FN } from '../constants/Symbol'
import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Fn from './js/Fn'
import Number from '../types/Number'
import String from '../types/String'
import definitionToFn from './definitionToFn'

describe('definitionToFn', () => {
  it('builds a function using the given function and defintion', async () => {
    const foo = definitionToFn((argA, argB) => argB, [
      Any,
      Number,
      () => String
    ])

    expect(foo[FN].meta).toEqual({
      parameters: [
        new js.Parameter('argA', Any),
        new js.Parameter('argB', Number)
      ],
      returns: String
    })
  })

  test('returns a function with a symbol pointing to the Fn instance when built', () => {
    const func = (n) => {
      return n
    }
    const fn = definitionToFn(func, [Number, () => Number])

    expect(fn).toBeInstanceOf(Function)
    expect(fn[FN]).toBeInstanceOf(Fn)
    expect(fn[FN]).toMatchObject({
      func,
      handler: expect.any(Function),
      meta: {
        parameters: [new js.Parameter('n', Number)],
        returns: Number
      }
    })
  })

  test('returned function is executable', () => {
    const func = (n) => {
      return n
    }
    const fn = definitionToFn(func, [Number, () => Number])

    expect(fn(2)).toBe(2)
  })

  test('returned functions length is set to the number of parameters', () => {
    const func = (p1, p2, p3) => {
      return p3
    }
    const fn = definitionToFn(func, [Number, () => Number])

    expect(fn.length).toBe(3)
  })

  test('sets the definition of an anonymous function with fixed parameters', () => {
    const func = (n) => {
      return n
    }
    const fn = definitionToFn(func, [Number, () => Number])

    expect(fn[FN]).toMatchObject({
      func,
      handler: expect.any(Function),
      meta: {
        parameters: [new js.Parameter('n', Number)],
        returns: Number
      }
    })
  })

  test('Defaults the parameter types to Any if no type definitions are provided', () => {
    const fn = definitionToFn((foo, bar) => {
      return bar
    })
    expect(fn[FN].meta).toEqual({
      parameters: [new js.Parameter('foo', Any), new js.Parameter('bar', Any)],
      returns: Any
    })
  })

  test('Defaults return type to Any if no return type definition is provided', () => {
    const fn = definitionToFn(
      (foo, bar) => {
        return bar
      },
      [String, String]
    )
    expect(fn[FN].meta).toEqual({
      parameters: [
        new js.Parameter('foo', String),
        new js.Parameter('bar', String)
      ],
      returns: Any
    })
  })

  test('Throws error if given a non Type in the paramTypes', () => {
    const Foo = function () {}
    expect(() => {
      definitionToFn(
        (num, str) => {
          return str
        },
        [Number, Foo]
      )
    }).toThrow(Error)
  })

  test('Parameters types are defaulted to Any if not specified', () => {
    const fn = definitionToFn(
      (foo, bar) => {
        return bar
      },
      [Number]
    )
    expect(fn[FN].meta).toEqual({
      parameters: [
        new js.Parameter('foo', Number),
        new js.Parameter('bar', Any)
      ],
      returns: Any
    })
  })

  test('Types are looked up by class if they are not referenced directly', () => {
    const fn = definitionToFn(
      (foo, bar) => {
        return bar
      },
      [js.Number, js.String, () => js.Boolean]
    )
    expect(fn[FN].meta).toEqual({
      parameters: [
        new js.Parameter('foo', Number),
        new js.Parameter('bar', String)
      ],
      returns: Boolean
    })
  })

  test('Parameters name are defaulted to arg[Idx] if not specified', () => {
    const fn = definitionToFn(
      (foo, ...rest) => {
        return rest
      },
      [Number, Number]
    )
    expect(fn[FN].meta).toEqual({
      parameters: [
        new js.Parameter('foo', Number),
        new js.Parameter('arg1', Number)
      ],
      returns: Any
    })
  })
})
