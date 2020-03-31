export const getItem = item => localStorage.getItem(item)
export const setItem = item => {
  if (typeof item === 'object') {
    item.map(p => localStorage.setItem(p.name, p.value))
  } else {
    localStorage.setItem(item.name, item.value)
  }
  return item
}
export const clearStorage = () => localStorage.clear()
