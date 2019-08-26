import Any from '../types/Any'
import functionDefineMeta from './functionDefineMeta'
import objectHasOwnProperty from './objectHasOwnProperty'

describe('functionDefineMeta', () => {
  test('defines parameters and sets length', () => {
    const func = functionDefineMeta(
      (argA, argB) => {
        return argB
      },
      {
        parameters: [{ name: 'argA', type: Any }, { name: 'argB', type: Any }]
      }
    )
    expect(func.parameters).toEqual([{ name: 'argA', type: Any }, { name: 'argB', type: Any }])
    expect(func.length).toBe(2)
    expect(objectHasOwnProperty(func, 'dispatcher')).toBe(false)
    expect(objectHasOwnProperty(func, 'curried')).toBe(false)
    expect(objectHasOwnProperty(func, 'returns')).toBe(false)
  })

  test('defines curried', () => {
    const func = functionDefineMeta(
      (argA, argB) => {
        return argB
      },
      {
        curried: true
      }
    )
    expect(func.curried).toBe(true)
    expect(func.length).toBe(2)
    expect(objectHasOwnProperty(func, 'parameters')).toBe(false)
    expect(objectHasOwnProperty(func, 'dispatcher')).toBe(false)
    expect(objectHasOwnProperty(func, 'returns')).toBe(false)
  })

  test('defines dispatcher', () => {
    const func = functionDefineMeta(
      (argA, argB) => {
        return argB
      },
      {
        dispatcher: {
          dispatch: () => {}
        }
      }
    )
    expect(func.dispatcher).toEqual({
      dispatch: expect.any(Function)
    })
    expect(func.length).toBe(2)
    expect(objectHasOwnProperty(func, 'parameters')).toBe(false)
    expect(objectHasOwnProperty(func, 'curried')).toBe(false)
    expect(objectHasOwnProperty(func, 'returns')).toBe(false)
  })

  test('defines returns', () => {
    const func = functionDefineMeta(
      (argA, argB) => {
        return argB
      },
      {
        returns: Any
      }
    )
    expect(func.returns).toBe(Any)
    expect(func.length).toBe(2)
    expect(objectHasOwnProperty(func, 'parameters')).toBe(false)
    expect(objectHasOwnProperty(func, 'curried')).toBe(false)
    expect(objectHasOwnProperty(func, 'dispatcher')).toBe(false)
  })
})
