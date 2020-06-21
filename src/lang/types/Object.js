import Any from './Any'
import Boolean from './Boolean'
import Propertied from '../protocols/Propertied'
import Property from './Property'
import Self from './Self'
import anyIsObject from '../util/anyIsObject'
import anyToObject from '../util/anyToObject'
import defineAny from '../util/defineAny'
import definitionToType from '../util/definitionToType'
import definitionsToFn from '../util/definitionsToFn'
import jsObject from '../classes/Object'
import objectDeleteProperty from '../util/objectDeleteProperty'
import objectGetProperty from '../util/objectGetProperty'
import objectHasOwnProperty from '../util/objectHasOwnProperty'
import objectHasProperty from '../util/objectHasProperty'
import objectPropertyIsEnumerable from '../util/objectPropertyIsEnumerable'
import objectSetProperty from '../util/objectSetProperty'

const _Object = defineAny(
  'lang.Object',
  'A generic object',

  definitionToType({
    class: jsObject,
    is: anyIsObject,
    protocols: [
      Propertied,
      {
        'lang.deleteProperty': definitionsToFn([
          [Self, Property, () => Self],
          objectDeleteProperty,

          [Property, Self, () => Self],
          (property, self) => objectDeleteProperty(self, property)
        ]),
        'lang.getProperty': definitionsToFn([
          [Self, Property, () => Any],
          objectGetProperty,

          [Property, Self, () => Any],
          (property, self) => objectGetProperty(self, property)
        ]),
        'lang.hasOwnProperty': definitionsToFn([
          [Self, Property, () => Boolean],
          objectHasOwnProperty,

          [Property, Self, () => Boolean],
          (property, self) => objectHasOwnProperty(self, property)
        ]),
        'lang.hasProperty': definitionsToFn([
          [Self, Property, () => Boolean],
          objectHasProperty,

          [Property, Self, () => Boolean],
          (property, self) => objectHasProperty(self, property)
        ]),
        'lang.propertyIsEnumerable': definitionsToFn([
          [Self, Property, () => Boolean],
          objectPropertyIsEnumerable,

          [Property, Self, () => Boolean],
          (property, self) => objectPropertyIsEnumerable(self, property)
        ]),
        'lang.setProperty': definitionsToFn([
          [Self, Property, Any, () => Self],
          objectSetProperty,

          [Property, Any, Self, () => Self],
          (property, any, self) => objectSetProperty(self, property, any)
        ])
      }
    ],
    to: anyToObject
  })
)

export default _Object
