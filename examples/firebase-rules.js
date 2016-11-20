lang('firebase',

ns('my-rules',
  path('/some/path')
    .validate(['value', 'previous'],
      _if(call('doesNotExist', 'value'),
        _return(true)
      )
      lt('previous', 'value')),

  fn('doesExist', ['value'],
    notEqual('value', null)),
  fn('doesNotExist', ['value'],
    equal('value', null)))))
