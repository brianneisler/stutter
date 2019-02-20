import { keys, map } from '../../../src/lang/util/'

const valueMap = {
  null: null,
  undefined: undefined
}
const nils = () => (selected = keys(valueMap)) => map((key) => valueMap[key](), selected)

export default nils
