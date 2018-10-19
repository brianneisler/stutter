lang('firebase'

ns('my-rules'
  path('/some/path')
    .validate([value previous]
      if(doesNotExist(value)
        return(true))
      lt(previous value))

  fn(doesExist [value]
    notEqual(value null))
  fn(doesNotExist [value]
    equal(value null)))))
