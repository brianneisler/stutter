import anyIsObjectLike from '../util/anyIsObjectLike'
import deftype from '../deftype'

const ObjectLike = deftype('lang.ObjectLike', 'A value that is indexed and has a length', {
  is: anyIsObjectLike
})

export default ObjectLike
