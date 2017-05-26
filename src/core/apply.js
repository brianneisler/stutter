import Applicable from './protocols/Applicable'
import withCurry from './util/withCurry'
import withFns from './util/withFns'
import expect from './expect'
import fn from './fn'
import recompose from './recompose'
import satisfies from './satisfies'


const enhance = recompose(
  withCurry(2),
  withFns({
    expect,
    satisfies
  })
)

const apply = enhance(({ expect, satisfies }) => fn((applicable, args) {
  expect(
    satisfies(applicable, Applicable),
    `${applicable} does not implement Applicable protocol`
  )
  return method.apply(null, args)
})))

export default apply
