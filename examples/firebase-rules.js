lang('firebase',

ns('my-rules',
  path('/some/path')
    .validate(['value', 'previous'],
      iif(call('doesNotExist', 'value'),
        rreturn(true)
      )
      lt('previous', 'value')),

  fn('doesExist', ['value'],
    notEqual('value', null)),
  fn('doesNotExist', ['value'],
    equal('value', null)))))
