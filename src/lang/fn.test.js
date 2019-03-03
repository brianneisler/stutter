import { Any, Number, String } from './types'
import fn from './fn'

describe('fn', () => {
  it('maintains context of function', () => {
    const test = {
      func: fn(function() {
        expect(this).toBe(test)
        return 'baz'
      })
    }
    expect(test.func()).toBe('baz')
  })

  it('resolves async values when executed', async () => {
    const foo = fn((arg) => {
      expect(arg).toBe('foo')
      return arg
    })
    const result = foo(Promise.resolve('foo'))
    expect(result).toBeInstanceOf(Promise)
    expect(await result).toBe('foo')
  })

  it('Accepts an Array of types to apply to the function', () => {
    const foo = fn([Number], (num) => {
      expect(num).toBe(123)
      return num
    })
    expect(foo(123)).toBe(123)
  })

  it('Returns a Parameterized function', () => {
    const method = fn([Number], (num) => num)
    expect(method.parameters).toEqual([
      expect.objectContaining({
        name: 'num',
        type: Number
      })
    ])
  })

  it('Defaults Parameter types to Any if not supplied', () => {
    const method = fn((foo) => foo)
    expect(method.parameters).toEqual([
      expect.objectContaining({
        name: 'foo',
        type: Any
      })
    ])
  })

  it('Throws a TypeError when argument does not match expected Type and function is last in stack', async () => {
    const foo = fn([Number], (num) => num)
    expect(() => foo('foo')).toThrow(TypeError)
  })

  it('Throws a TypeError when return value does not match expected Type and function is last in stack', async () => {
    const foo = fn([Number, () => Number], (num) => `foo-${num}`)
    expect(() => foo(123)).toThrow(TypeError)
  })

  it('throws a TypeError when argument does not match expected Type and function is last in stack after async value is resolved', async () => {
    const foo = fn([Number], (num) => {
      expect(num).toBe(123)
      return num
    })
    expect(foo(Promise.resolve('foo'))).rejects.toBeInstanceOf(TypeError)
  })

  // it('throws an Exception when argument does not match expected Type', async () => {
  //   const foo = fn([Number], (num) => num)
  //   try {
  //     foo('foo')
  //   } catch (error) {
  //     expect(error).toMatchObject({
  //       code: 'Expected:Argument:toMatchParameter'
  //     })
  //     return
  //   }
  //   throw new Error('Did not throw')
  // })

  // it('throws an Exception when argument does not match expected Type after async value is resolved', async () => {
  //   const foo = fn([Number], (num) => {
  //     expect(num).toBe(123)
  //     return num
  //   })
  //   expect(foo(Promise.resolve('foo'))).rejects.toMatchObject({
  //     code: 'Expected:Argument:toMatchParameter'
  //   })
  // })

  it('Curries the given method', () => {
    const method = fn((foo, bar) => {
      expect(foo).toBe('foo')
      expect(bar).toBe('bar')
      return foo + bar
    })
    const cMethod = method('foo')
    expect(cMethod).toBeInstanceOf(Function)
    expect(cMethod('bar')).toBe('foobar')
  })

  it('Curries a single parameterized function', () => {
    const method = fn([String, String], (foo, bar) => {
      expect(foo).toBe('foo')
      expect(bar).toBe('bar')
      return foo + bar
    })
    const cMethod = method('foo')
    expect(cMethod).toBeInstanceOf(Function)
    expect(cMethod('bar')).toBe('foobar')
  })

  it('Curried single methods are properly pararmeterized', () => {
    const method = fn([String, String], (foo, bar) => bar)
    expect(method.parameters).toEqual([
      expect.objectContaining({
        name: 'foo',
        type: String
      }),
      expect.objectContaining({
        name: 'bar',
        type: String
      })
    ])
  })

  it('Executing curried single methods returns a parameterized function', () => {
    const method = fn([String, String], (foo, bar) => bar)
    const cMethod = method('foo')
    expect(cMethod.parameters).toEqual([
      expect.objectContaining({
        name: 'bar',
        type: String
      })
    ])
  })

  // it('throws an Exception when executed with no arguments', async () => {
  //   const foo = fn((num) => num)
  //   try {
  //     foo()
  //   } catch (error) {
  //     expect(error).toMatchObject({
  //       code: 'Expected:Arguments:not.toBeEmpty'
  //     })
  //     return
  //   }
  //   throw new Error('Did not throw')
  // })

  it('throws an Exception when executed with no arguments and function is last in stack', async () => {
    const foo = fn((num) => num)
    expect(() => foo()).toThrow(TypeError)
  })
})
