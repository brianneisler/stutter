import { ARGS_TAG } from './util/constants'
import getTag from './util/getTag'
import withCurry from './util/withCurry'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose(
  withCurry(1)
)

const isArguments = enhance(() => fn((value) => {
  return typeof value === 'object' && value !== null && getTag(value) === ARGS_TAG
}))

export default isArguments
