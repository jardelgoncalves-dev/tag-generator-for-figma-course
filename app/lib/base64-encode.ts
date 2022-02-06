import fs from 'fs'
export function base64Encode(relativePath: string) {
  const bitmap = fs.readFileSync(`${process.cwd()}/public${relativePath}`)

  return `data:image/png;base64,${bitmap.toString('base64')}`
}