/* eslint-disable no-unused-expressions */
/**
 functions to set settings based on local storage
 */
export const setSettings = (name, localKey) => {
  const elems = document.querySelectorAll(`[name=${name}]`)
  const val = localStorage.getItem(localKey)
  elems.forEach(elem => {
    if (elem.id === val) {
      // eslint-disable-next-line no-param-reassign
      elem.checked = true
    }
  })
}

//  add item to local storage
export const writeItem = (key, item) => {
  localStorage.setItem(key, item)
  return item
}
//  get item from local storage
export const getItem = key => {
  localStorage.getItem(key)
  return key
}

//  delete item from local storaga
export const removeItem = key => {
  localStorage.removeItem(key)
  return key
}

export const getLocalStorageItems = payload => {
  if (typeof payload === 'object') {
    const items = payload.map(item => localStorage.getItem(item.name))
    return items
  }
  return payload
}
export const clearStorage = () => localStorage.clear()
