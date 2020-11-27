export function cloneShallow(obj) {
  return Object.keys(obj).reduce((acc, prop) => {
    if (Array.isArray(obj[prop])) {
      acc[prop] = obj[prop].slice(0)
    } else {
      acc[prop] = obj[prop]
    }
    return acc
  }, {})
}

export function isEmptyObj(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}
