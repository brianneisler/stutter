import _ from 'lodash';
export default _.memoize((key) => {
  return (...args) => {
    return {[key]: args }
  };
});
