import { PropTypes } from 'react'

const StoreShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})

export default StoreShape
