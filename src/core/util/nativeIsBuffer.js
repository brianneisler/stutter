import moduleExports from './moduleExports'
import root from './root'

const Buffer = moduleExports ? root.Buffer : undefined
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined
export default nativeIsBuffer
