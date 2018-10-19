import { describe } from '../../example'
import { add } from '../'

describe({ add })
  .example('one plus one', ({ add }) => {
    add(1, 1)
  })
