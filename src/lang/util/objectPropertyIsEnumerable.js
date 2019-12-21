import Object from './js/Object'

const { propertyIsEnumerable } = Object.prototype

const objectPropertyIsEnumerable = (object, property) => propertyIsEnumerable.call(object, property)

export default objectPropertyIsEnumerable
