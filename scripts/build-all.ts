import { resolve } from 'node:path'

import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'

export const rootDir = resolve(fileURLToPath(import.meta.url), '../..')
export const pkgNames = readdirSync(resolve(rootDir, 'packages'))

async function run(bin: string, args: string[], opts: any) {
  return execa(bin, args, { stdio: 'inherit', ...opts })
}

async function main() {
  await Promise.all(
    pkgNames.map(async pkgName => {
      const pkgDir = resolve(rootDir, `packages/${pkgName}`)

      return run('pnpm', ['build'], { cwd: pkgDir, stdio: 'pipe' })
    })
  )
}

main().catch(error => {
  console.error(error)
  process.exit(1)
})
