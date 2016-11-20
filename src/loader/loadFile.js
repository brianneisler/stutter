import fs from 'fs-promise'

export default async function loadFile(path) {
  return await fs.readFile(path, 'utf8')
}
