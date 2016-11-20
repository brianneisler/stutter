// import * as _ from '../util'
// import isKeyword from './isKeyword'
// import keywordsMap from './keywordsMap'
//
// const handler = {
//   get: function (target, key) {
//     if (_.has(target, key)) {
//       return target[key]
//     }
//     return isKeyword(key, keywords) ? chainKeyword(keywordsMap[key], target) : undefined
//   }
// }
//
// export default function proxyKeyword(keyword) {
//   return (...args) => {
//     return new Proxy(keyword(...args), handler)
//   }
// }
//
// function chainKeyword(keyword, target) {
//   return (...args) => {
//     target['@children'].push(keyword(...args))
//     //TODO BRN: Do we need to proxy the target again or will it already be proxied?
//     return new Proxy(target, handler)
//   }
// }
