import * as randomBytes from 'randombytes';

function random(size: number) {
  const r = randomBytes(32 + size)
  return r.slice(32)
}

export {
  random
}
