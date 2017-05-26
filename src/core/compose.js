import baseCompose from './util/baseCompose'
import withCurry from './util/withCurry'
import withFns from './util/withFns'
import flatten from './flatten'
import fn from './fn'
import recompose from './recompose'


const enhance = recompose(
  withCurry(2),
  withFns({
    flatten
  })
)

const compose = enhance(({ flatten }) => fn((...funcs) => {
  funcs = flatten(funcs)
  return baseCompose(...funcs)
})

export default compose
