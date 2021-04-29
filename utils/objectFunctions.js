export const isObjectPresentOrEmpty = (obj) => {
  return obj === undefined || !Object.keys(obj).length
}
