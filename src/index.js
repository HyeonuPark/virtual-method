export function method (givenFunc) {
  function methodified (...args) {
    return givenFunc(this, ...args)
  }

  Object.defineProperty(methodified, 'name', {value: givenFunc.name})
  return methodified
}
