import Buffer from '../classes/Buffer'

/**
 * Converts the given value to a Buffer
 *
 * @private
 * @function
 * @since v0.1.0
 * @category lang.util
 * @param {*} any The value to convert to a Buffer.
 * @returns {Buffer | Uint8Array} Returns the Buffer.
 * @example
 *
 * // Creates a new Buffer containing UTF-8 bytes of the string 'buffer'
 * bufferFrom([0x62, 0x75, 0x66, 0x66, 0x65, 0x72])
 */
const bufferFrom = (any) => Buffer.from(any)

export default bufferFrom
