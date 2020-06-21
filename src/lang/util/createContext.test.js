import { Context } from '../classes'
import createContext from './createContext'

describe('createContext', () => {
  test('creates an Context', () => {
    const result = createContext({})
    expect(result).toBeInstanceOf(Context)
  })
})
