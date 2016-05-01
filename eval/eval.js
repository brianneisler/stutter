module.exports = function(data, context, path) {
  with(context) {
    return eval(data, path);
  }
}
