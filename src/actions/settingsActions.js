import { ENABLE_DARK_THEME, SEND_OPTION, SET_CLOCK, CHANGE_USER } from './types'

export const setThemeColor = () => dispatch => {
  const theme = localStorage.getItem('themeColor')
  const time12hours = localStorage.getItem('time12hours')
  const time24hours = localStorage.getItem('time24hours')
  const sendoption = localStorage.getItem('sendOptions')
  dispatch((type: ENABLE_DARK_THEME), (payload: value))
}
