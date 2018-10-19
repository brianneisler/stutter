import { describe } from '../../example'
import { chunk } from '../'

describe({ chunk })
  .example('chunk an array', ({ chunk }) => {
    chunk(['a', 'b', 'c', 'd'], 2)
  })
