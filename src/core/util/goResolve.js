import goValue from './goValue'
export default async function goResolve(value) {
  value = await Promise.resolve(value)
  return await goValue(value)
}
