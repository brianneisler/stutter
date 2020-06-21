import {
  ArrayBuffer,
  Buffer,
  Date,
  Map,
  Promise,
  Proxy,
  Set,
  WeakMap,
  WeakSet
} from '../../../src/lang/classes'

const values = [
  new ArrayBuffer(2),
  new Buffer([]),
  new Date(),
  new Map(),
  new Promise(() => {}),
  new Proxy({}, {}),
  new Set(),
  new WeakMap(),
  new WeakSet()
]

const nativeJsClasses = () => values

export default nativeJsClasses
