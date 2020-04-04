import { SET_USER, SET_ROOM, SET_SETTINGS, LEAVE_ROOM } from '../types'
import { getLocalStorageItems } from '../../utils/localStorage'

//  set the username to null thus, logging iut
export const logOut = () => ({
  type: LEAVE_ROOM,
})

//  get current user
export const getUser = username => ({
  type: SET_USER,
  payload: username,
})

//  get room
export const getRoom = room => ({
  type: SET_ROOM,
  payload: room,
})

//  action to set settings from the local storage on first load
export const loadSettings = () => {
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
