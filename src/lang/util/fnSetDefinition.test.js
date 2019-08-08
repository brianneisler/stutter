import * as js from './js'
import Any from '../types/Any'
import Boolean from '../types/Boolean'
import Fn from './js/Fn'
import Number from '../types/Number'
import String from '../types/String'
import fnSetDefinition from './fnSetDefinition'

describe('fnSetDefinition', () => {
  test('returns a new instance of Fn when definition is set', () => {
    const func = (n) => {
      return n
    }
    const fn = new Fn(func)
    const fn2 = fnSetDefinition(fn, [Number, () => Number])

    expect(fn2).not.toBe(fn)
    expect(fn2).toEqual({
      func,
      meta: {
        parameters: [new js.Parameter('n', Number)],
        returns: Number
      }
    })
  })

  test('sets the definition of an anonymous function with fixed parameters', () => {
    const func = (n) => {
      return n
    }
    const fn = fnSetDefinition(new Fn(func), [Number, () => Number])

    expect(fn).toEqual({
      func,
      meta: {
        parameters: [new js.Parameter('n', Number)],
        returns: Number
      }
    })
  })

  test('Defaults the parameter types to Any if no type definitions are provided', () => {
    const fn = fnSetDefinition(
      new Fn((foo, bar) => {
        return bar
      })
    )
    expect(fn.meta).toEqual({
      parameters: [new js.Parameter('foo', Any), new js.Parameter('bar', Any)],
      returns: Any
    })
  })

  test('Defaults return type to Any if no return type definition is provided', () => {
    const fn = fnSetDefinition(
      new Fn((foo, bar) => {
        return bar
      }),
      [String, String]
    )
    expect(fn.meta).toEqual({
      parameters: [new js.Parameter('foo', String), new js.Parameter('bar', String)],
      returns: Any
    })
  })

  test('Throws error if given a non Type in the paramTypes', () => {
    const Foo = function() {}
    expect(() => {
      fnSetDefinition(
        new Fn((num, str) => {
          return str
        }),
        [Number, Foo]
      )
    }).toThrow(Error)
  })

  test('Parameters types are defaulted to Any if not specified', () => {
    const fn = fnSetDefinition(
      new Fn((foo, bar) => {
        return bar
      }),
      [Number]
    )
    expect(fn.meta).toEqual({
      parameters: [new js.Parameter('foo', Number), new js.Parameter('bar', Any)],
      returns: Any
    })
  })

  test('Types are looked up by class if they are not referenced directly', () => {
    const fn = fnSetDefinition(
      new Fn((foo, bar) => {
        return bar
      }),
      [js.Number, js.String, () => js.Boolean]
    )
    expect(fn.meta).toEqual({
      parameters: [new js.Parameter('foo', Number), new js.Parameter('bar', String)],
      returns: Boolean
    })
  })

  test('Parameters name are defaulted to arg[Idx] if not specified', () => {
    const fn = fnSetDefinition(
      new Fn((foo, ...rest) => {
        return rest
      }),
      [Number, Number]
    )
    expect(fn.meta).toEqual({
      parameters: [new js.Parameter('foo', Number), new js.Parameter('arg1', Number)],
      returns: Any
    })
  })
})
