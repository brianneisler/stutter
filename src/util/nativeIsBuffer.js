import { freeExports, freeModule, moduleExports, root } from '../free'

const Buffer = moduleExports ? root.Buffer : undefined
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined
export default nativeIsBuffer
