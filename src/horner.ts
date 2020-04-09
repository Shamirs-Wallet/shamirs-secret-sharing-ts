import { MAX_SHARES } from './constants'
import { logs, exps } from './table'

function horner(x: number, a: string | any[]) {
  const n = MAX_SHARES
  const t = a.length - 1
  let b = 0

  for (let i = t; i >= 0; --i) {
    b = 0 === b ? a[i] : exps[(logs[x] + logs[b]) % n] ^ a[i]
  }

  return b
}

export {
  horner
}
