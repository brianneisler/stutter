const freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports
const freeModule  = freeExports && typeof module == 'object' && module && !module.nodeType && module
const moduleExports   = freeModule && freeModule.exports === freeExports
