import copyObject from './util/copyObject'
import withAssigner from './util/withAssigner'
import withMutations from './util/withMutations'
import keys from './keys'

const assignWith = withMutations(withAssigner((data, source, srcIndex, customizer) => {
  return copyObject(source, keys(source), data, customizer)
}))

export default assignWith
