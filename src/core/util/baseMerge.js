import _ from 'lodash'
import isImmutable from './isImmutable'
import { mapImmutable, mapMutable } from './helpers'

export default function assign(data, ...args) {
  return isImmutable(data)
    ? data.merge(...mapImmutable(args))
    : _.assign(data, ...mapMutable(args))
}

// Conceptual idea on how to get context working again
// import { branchIm, compose, hintConvertRest } from '../recompose'
//
// const enhance = compose(
//   withLodash(),
//   hintConvertRest()
//   branchIm(
//     imAssign,
//     muAssign
//   )
// )
//
// const imAssign = () => (data, ...args) => data.merge(...args)
// const muAssign = ({ _ }) => (data, ...args) => _.assign(data, ...args)
//
// const assign = enhance()
// export default assign

import assignValue from './util/assignValue'
import copyObject from './util/copyObject'
import withAssigner from './util/withAssigner'
import isArrayLike from './isArrayLike'
import isPrototype from './isPrototype'
import keys from './keys'


const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty

const assign = withAssigner((data, source) => {
  if (isPrototype(source) || isArrayLike(source)) {
    return copyObject(source, keys(source), data)
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key])
    }
  }
})

export default assign
