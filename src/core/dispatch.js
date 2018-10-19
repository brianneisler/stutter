import Dispatcher from './protocols/Dispatcher'
import expect from './expect'
import fn from './fn'
import recompose from './recompose'
import satisfies from './satisfies'
import _with from './with'


const enhance = recompose(
  _with.fns({
    expect,
    satisfies
  })
)

const dispatch = enhance(({ expect, satisfies }) => fn((dispatcher, event) => {
  expect(
    satisfies(dispatcher, Dispatcher),
    `${dispatcher} does not implement Dispatcher protocol`
  )
  return dispatcher.dispatch(event)
}))

export default dispatch
