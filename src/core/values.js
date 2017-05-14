// import _ from 'lodash'
// import isImmutable from './isImmutable'
//
// export default function values(data) {
//   return isImmutable(data)
//     ? data.valueSeq()
//     : _.values(data)
// }

import baseValues from './util/baseValues'

export default function values(data) {
  return data == null ? [] : baseValues(data)
}
