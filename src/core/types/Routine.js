import goGoable from '../util/goGoable'
import type from '../type'
import _Object from './Object'

const Routine = type('Routine', {

  goable: _Object,

  async go(args, obj) {
    return await goGoable(obj.goable, args)
  }
})

export default Routine
