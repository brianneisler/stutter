import goResolve from './goResolve'

export default async function goNext(generator, value) {
  const next = generator.next(value)
  return {
    ...next,
    value: await goResolve(next.value)
  }
}
