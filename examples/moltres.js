component(
  handlers(

  )
  lifecycle(
    componentWillMount(
      fireAction('setupShare' {
        path: interpolate('question/{questionId}' {
          questionId: prop('question').id
        })
      })
    )
  )
)
