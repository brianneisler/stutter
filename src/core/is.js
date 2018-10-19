// expects a type
// accepts any value
// returns a boolean
// checks if value is of type
import Any from './types/Any'
import Boolean from './types/Boolean'
import Type from './types/Type'
import isType from './util/isType'
import withCurry from './util/withCurry'
import withFns from './util/withFns'
import fn from './fn'
import recompose from './recompose'
import reduce from './reduce'
import toNumber from './toNumber'


const enhance = recompose(
  _with.schema({
    props: {
      type: Type
    },
    params: {
      value: Any
    },
    returns: Boolean
  })
  _with.chain((props, link) => {
    if (isType(link)) {

    }
  })
  _with.chain(
    (props, link) => props.assoc({ type: link })
  )
  _with.chain()
)

const is = enhance(({ type }) => fn((value) => type.is(value)))

export default is
