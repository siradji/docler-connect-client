const date = new Date()

export const time24hours = () => {
  const hours = date.getHours()
  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  return `${hours}:${minutes}`
}

export const time12Hours = () => {
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const antePost = hours <= 12 ? 'AM' : 'PM'
  const hour = hours % 12 || 12
  return `${hour}:${minutes}${antePost}`
}

//  helper function that check current location
export const activepage = pathname => pathname === window.location.pathname
