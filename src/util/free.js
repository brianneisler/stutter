

const root            = freeGlobal || freeSelf || Function('return this')()
const freeExports     = typeof exports == 'object' && exports && !exports.nodeType && exports
const freeModule      = freeExports && typeof module == 'object' && module && !module.nodeType && module
const moduleExports   = freeModule && freeModule.exports === freeExports
const freeProcess     = moduleExports && freeGlobal.process
export {
  freeExports,
  freeGlobal,
  freeModule,
  freeProcess,
  freeSelf,
  moduleExports,
  root
}
