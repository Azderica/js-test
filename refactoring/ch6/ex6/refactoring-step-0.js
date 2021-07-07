// before
let defaultOwner = { firstName: '마틴', lastName: '파울러' }

// after
let defaultOwner = { firstName: '마틴', lastName: '파울러' }
export function defaultOwner() {
  return defaultOwner
}
export function settDefaultOwner(arg) {
  defaultOwner = arg
}
