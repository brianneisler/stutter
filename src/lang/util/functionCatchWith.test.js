import functionCatchWith from './functionCatchWith'

describe('functionCatchWith', () => {
  test('catches sync errors', () => {
    const handler = jest.fn()
    const func = functionCatchWith(() => {
      throw new Error('foo')
    }, handler)
    func()
    expect(handler).toHaveBeenCalledWith(new Error('foo'))
  })

  test('sync errors can be rethrown', () => {
    const handler = (error) => {
      throw error
    }
    const func = functionCatchWith(() => {
      throw new Error('foo')
    }, handler)
    expect(func).toThrow(new Error('foo'))
  })

  test('returns value from error handler when function is sync', () => {
    const handler = () => 'bar'
    const func = functionCatchWith(() => {
      throw new Error('foo')
    }, handler)
    const result = func()
    expect(result).toBe('bar')
  })

  test('catches async errors', async () => {
    const handler = jest.fn()
    const func = functionCatchWith(async () => {
      throw new Error('foo')
    }, handler)
    await func()
    expect(handler).toHaveBeenCalledWith(new Error('foo'))
  })

  test('async errors can be rethrown', async () => {
    const handler = (error) => {
      throw error
    }
    const func = functionCatchWith(async () => {
      throw new Error('foo')
    }, handler)
    await expect(func()).rejects.toEqual(new Error('foo'))
  })

  test('returns value from error handler when function is async', async () => {
    const handler = () => 'bar'
    const func = functionCatchWith(async () => {
      throw new Error('foo')
    }, handler)
    const result = await func()
    expect(result).toBe('bar')
  })

  test('catches generator errors', () => {
    const handler = jest.fn()
    const func = functionCatchWith(function*() {
      throw new Error('foo')
    }, handler)
    const generator = func()
    generator.next()
    expect(handler).toHaveBeenCalledWith(new Error('foo'))
  })

  test('generator errors can be rethrown', () => {
    const handler = (error) => {
      throw error
    }
    const func = functionCatchWith(function*() {
      throw new Error('foo')
    }, handler)
    expect(() => {
      const generator = func()
      generator.next()
    }).toThrow(new Error('foo'))
  })

  test('returns value from error handler when function is a generator', () => {
    const handler = () => 'bar'
    const func = functionCatchWith(function*() {
      throw new Error('foo')
    }, handler)
    const generator = func()
    const result = generator.next()
    expect(result).toEqual({ done: true, value: 'bar' })
  })
})
