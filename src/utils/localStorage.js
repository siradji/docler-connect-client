export const getItem = item => localStorage.getItem(item)
export const setItemToLocalStorage = item => {
  if (typeof item === 'object') {
    item.map(p => localStorage.setItem(p.name, p.value))
  } else {
    localStorage.setItem(item.name, item.value)
  }
  return item
}

export const getLocalStorageItems = payload => {
  if (typeof payload === 'object') {
    const items = payload.map(item => localStorage.getItem(item.name))
    return items
  }
  return payload
}
export const clearStorage = () => localStorage.clear()
