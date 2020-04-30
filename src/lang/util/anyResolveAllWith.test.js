import anyIterate from './anyIterate'
import anyResolveAllWith from './anyResolveAllWith'
import objectSetProperty from './objectSetProperty'

describe('anyResolveAllWith', () => {
  test('resolves basic values with sync identity function to themselves', () => {
    expect(
      anyResolveAllWith(
        0,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(0)
    expect(
      anyResolveAllWith(
        1,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(1)
    expect(
      anyResolveAllWith(
        -1,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(-1)
    expect(
      anyResolveAllWith(
        '',
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe('')
    expect(
      anyResolveAllWith(
        'abc',
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe('abc')
    expect(
      anyResolveAllWith(
        null,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(null)
    expect(
      anyResolveAllWith(
        undefined,
        (value) => value,
        () => {},
        () => {},
        () => {}
      )
    ).toBe(undefined)
    expect(
      anyResolveAllWith(
        true,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(true)
    expect(
      anyResolveAllWith(
        false,
        (value) => value,
        () => {},
        () => {}
      )
    ).toBe(false)
  })

  test('resolves an empty Array to the original Array', async () => {
    const array = []
    expect(
      anyResolveAllWith(
        array,
        (value) => value,
        anyIterate,
        () => {}
      )
    ).toBe(array)
  })

  test('resolves an empty Object to the original Object', async () => {
    const object = {}
    expect(
      anyResolveAllWith(
        object,
        (value) => value,
        anyIterate,
        () => {}
      )
    ).toBe(object)
  })

  test('resolves Promise to a Promise', async () => {
    const iterateFunc = (value, iteratee) => anyIterate(value, iteratee)
    const setFunc = jest.fn((target, key, value) => objectSetProperty(target, key, value))

    const promise = new Promise((pResolve) => {
      pResolve('foo')
    })
    const handler = jest.fn(() => 'bar')
    const resolver = anyResolveAllWith(promise, handler, iterateFunc, setFunc)
    expect(resolver).toBeInstanceOf(Promise)
    const result = await resolver
    expect(handler).toHaveBeenCalledWith('foo')
    expect(handler).toHaveBeenCalledTimes(1)
    expect(result).toBe('bar')
  })
})
