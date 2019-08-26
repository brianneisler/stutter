import externalPromise from './externalPromise'

describe('externalPromise', () => {
  test('externalPromise is synchronously resolved when not awaiting anything', async () => {
    const promise = externalPromise()

    promise.resolve('abc')

    expect(promise.isPending()).toBe(false)
    expect(promise.isFulfilled()).toBe(true)
    expect(promise.value()).toBe('abc')
  })

  test('externalPromise is resolvable', async () => {
    const promise = externalPromise()
    const handler = jest.fn()

    promise.then(handler)
    setTimeout(() => {
      promise.resolve('abc')
    }, 0)
    const result = await promise

    expect(handler).toHaveBeenCalledWith('abc')
    expect(result).toBe('abc')
  })

  test('externalPromise is rejectable', async () => {
    const promise = externalPromise()
    const catcher = jest.fn()

    promise.catch(catcher)
    setTimeout(() => {
      promise.reject('abc')
    }, 0)
    try {
      await promise
    } catch (error) {
      expect(error).toBe('abc')
    }
    expect(catcher).toHaveBeenCalledWith('abc')
  })
})
