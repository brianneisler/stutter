import ImmutableList from './js/ImmutableList'
import ImmutableMap from './js/ImmutableMap'
import Namespace from './js/Namespace'
import Protocol from './js/Protocol'
import Self from '../types/Self'
import String from './js/String'
import Type from './js/Type'
import anySatisfies from './anySatisfies'
import fn from '../fn'

describe('anySatisfies', () => {
  it('returns true for a value that has the given protocol', () => {
    const NumberType = new Type({
      class: Number,
      is: (any) => typeof any === 'number'
    })

    const BarProtocol = new Protocol(
      ImmutableMap({
        'foo.bar': ImmutableList([Self, NumberType])
      })
    )

    const StringType = new Type({
      class: String,
      is: (any) => typeof any === 'string',
      protocols: ImmutableMap([
        [
          BarProtocol,
          {
            'foo.bar': fn([Self, NumberType], () => {})
          }
        ]
      ])
    })

    const namespaces = ImmutableMap({
      foo: new Namespace(
        'foo',
        ImmutableMap({
          Number: {
            description: '',
            value: NumberType
          },
          String: {
            description: '',
            value: StringType
          },
          BarProtocol: {
            description: '',
            value: BarProtocol
          }
        })
      )
    })

    expect(anySatisfies('', BarProtocol, namespaces)).toBe(true)
    expect(anySatisfies('foo', BarProtocol, namespaces)).toBe(true)
  })

  test('returns false for all other values', () => {
    const NumberType = new Type({
      class: Number,
      is: (any) => typeof any === 'number'
    })

    const BarProtocol = new Protocol(
      ImmutableMap({
        'foo.bar': ImmutableList([Self, NumberType])
      })
    )

    const StringType = new Type({
      class: String,
      is: (any) => typeof any === 'string',
      protocols: ImmutableMap([
        [
          BarProtocol,
          {
            'foo.bar': fn([Self, NumberType], () => {})
          }
        ]
      ])
    })

    const namespaces = ImmutableMap({
      foo: new Namespace(
        'foo',
        ImmutableMap({
          Number: {
            description: '',
            value: NumberType
          },
          String: {
            description: '',
            value: StringType
          },
          BarProtocol: {
            description: '',
            value: BarProtocol
          }
        })
      )
    })

    expect(anySatisfies(undefined, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(null, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(false, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(true, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(0, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(-1, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(1, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(NaN, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(Infinity, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(-Infinity, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies({}, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies([], BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(/abc/, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new RegExp('abc'), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(async () => {}, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(() => {}, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(function() {}, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(function*() {}, BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies((function*() {})(), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Array(0), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new ArrayBuffer(2), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Boolean(false), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Boolean(true), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Date(), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Error(), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Number(1), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Promise(() => {}), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Proxy({}, {}), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new Set(), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(Symbol('abc'), BarProtocol, namespaces)).toBe(false)
    expect(anySatisfies(new WeakMap(), BarProtocol, namespaces)).toBe(false)
  })
})
