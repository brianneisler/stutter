import Any from '../../types/Any'
import Fn from './Fn'

describe('js:Fn', () => {
  describe('constructor', () => {
    test('correctly constructs the Fn instance', () => {
      const func = () => {}
      const instance = new Fn(func, {})
      expect(instance).toBeInstanceOf(Fn)
      expect(instance.func).toBe(func)
      expect(instance.meta).toEqual({})
    })
  })

  describe('getter curried', () => {
    test('returns the curried property from meta', () => {
      const func = () => {}
      const meta = {
        curried: true
      }
      const instance = new Fn(func, meta)
      expect(instance.curried).toBe(meta.curried)
    })
  })

  describe('getter dispatcher', () => {
    test('returns the dispatcher property from meta', () => {
      const func = () => {}
      const meta = {
        dispatcher: () => {}
      }
      const instance = new Fn(func, meta)
      expect(instance.dispatcher).toBe(meta.dispatcher)
    })
  })

  describe('getter parameters', () => {
    test('returns the parameters property from meta', () => {
      const func = () => {}
      const meta = {
        parameters: []
      }
      const instance = new Fn(func, meta)
      expect(instance.parameters).toBe(meta.parameters)
    })
  })

  describe('getter returns', () => {
    test('returns the returns property from meta', () => {
      const func = () => {}
      const meta = {
        returns: Any
      }
      const instance = new Fn(func, meta)
      expect(instance.returns).toBe(meta.returns)
    })
  })
})
