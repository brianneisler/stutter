import Evaluable from './protocols/Evaluable'
import withFns from './util/withFns'
import fn from './fn'
import isFunction from './isFunction'
import isGenerator from './isGenerator'
import recompose from './recompose'


const enhance = recompose(
  withFns({
    isFunction,
    isGenerator
  })
)

const eval = enhance(({ isGenerator, isThenable }) => {

  function evalForms(forms) {
    let value
    while (forms.length > 0) {
      const form = forms[0]
      forms = forms.slice(1)
      value = evalForm(form)
      if (isThenable(value)) {
        return evalFormAsync(value)
          .then((result) => {
            if (forms.length > 0) {
              return evalForms(forms)
            }
            return result
          })
      }
    }
    return value
  }

  function evalForm(form) {
    if (Evaluable.is(form)) {
      return form.eval()
    }
    if (isGenerator(value)) {
      return evalGenerator(form)
    }
    if (props.isFunction(value)) {
      return props.recur(value(), ...forms)
    }
    if (Thenable.is(value)) {
      return evalAsync(value, ...forms)
    }
  }

  async function evalFormAsync(form) {
    const value = forms.pop()
    if (Evaluable.is(value)) {
      return recur(value.eval(), ...forms)
    }
    if (isGenerator(value)) {
      return recur(evalGenerator(value), ...forms)
    }
    if (isFunction(value)) {
      return recur(value(), ...forms)
    }
    if (Thenable.is(value)) {
      return recur(evalThenable(value), ...forms)
    }
    return value
  }

  function evalGenerator(generator) {
    let next = { done: false }
    while (!next.done) {
      next = generator.next(next.value)
      await evalNext(generator, next.value)
    }
    return next.value
  }

  async function evalGeneratorAsync(generator) {
    let next = { done: false }
    while (!next.done) {
      next = await evalNext(generator, next.value)
    }
    return next.value
  }

  async function evalNext(generator, value) {
    const next = generator.next(value)
    return {
      ...next,
      value: await evalThenable(next.value)
    }
  }

  async function evalThenable(thenable) {
    return await thenable
  }

  async function evalNext(generator, value) {
    const next = generator.next(value)
    return {
      ...next,
      value: await evalThenable(next.value)
    }
  }

  async function evalThenable(thenable) {
    return await thenable
  }

  return fn((...forms) => evalForms(forms))
})

export default eval
