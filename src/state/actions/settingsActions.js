import { SET_USER, SET_ROOM, SET_SETTINGS } from '../types'
import { getLocalStorageItems } from '../../utils/localStorage'

export const getUser = username => ({
  type: SET_USER,
  payload: username,
})

export const getRoom = room => ({
  type: SET_ROOM,
  payload: room,
})

export const setSettings = () => {
  const itemsToGet = [
    {
      name: 'clockMode',
    },
    {
      name: 'theme',
    },
    {
      name: 'sendWithCtrl',
    },
  ]
  const data = getLocalStorageItems(itemsToGet)

  return {
    type: SET_SETTINGS,
    payload: data,
  }
}
// export const setThemeColor = () => dispatch => {
//   const theme = localStorage.getItem('themeColor')
//   const time12hours = localStorage.getItem('time12hours')
//   const time24hours = localStorage.getItem('time24hours')
//     const sendoption = localStorage.getItem('sendOptions')

//   dispatch((type: GET_SETTINGS), (payload: value))
// }
