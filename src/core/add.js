import arrayReduce from './arrayReduce'
import withArgsToNumber from './util/withArgsToNumber'
import withDefaultValue from './util/withDefaultValue'
import compose from './compose'
import fn from './fn'

const enhance = compose(
  withDefaultValue(0),
  withArgsToNumber()
)
const add = (...args) => arrayReduce(args, (acc, val) => acc + val, 0, true)

export default fn(enhance(add), 2)
