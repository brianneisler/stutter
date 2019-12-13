const anyUpdatePathWith = (path, object, func) => {
  switch (path.size) {
    case 0:
      return object
    case 1:
      return _delete(object, path.get(0))
    default:
      const head = path.get(0)
      return anyResolveWith(get(head, object), (headValue) => {
        if (anyIsNil(headValue)) {
          return object
        }
        return set(object, head, _delete(path.tail(), headValue))
      })
  }
}

export default anyUpdatePathWith
