import ImmutableMap from './js/ImmutableMap'
import Namespace from './js/Namespace'
import Number from './js/Number'
import String from './js/String'
import Type from './js/Type'
import findTypeForClass from './findTypeForClass'

describe('findTypeForClass', () => {
  test('integration test - find a type defined using deftype', () => {
    // jest.mock('./root', () => ({}))
    // const deftype = require('../deftype')
    // deftype()
  })

  test('find a Type in an ImmutableMap of Namespaces', () => {
    const NumberType = new Type({
      class: Number
    })
    const namespaces = ImmutableMap({
      bar: new Namespace(
        'bar',
        ImmutableMap({
          [456]: {
            description: '',
            value: 456
          },
          bar: {
            description: '',
            value: 'bar'
          }
        })
      ),
      foo: new Namespace(
        'foo',
        ImmutableMap({
          [123]: {
            description: '',
            value: 123
          },
          Number: {
            description: '',
            value: NumberType
          },
          String: {
            description: '',
            value: new Type({
              class: String
            })
          }
        })
      )
    })
    expect(findTypeForClass(Number, namespaces)).toBe(NumberType)
  })
})
