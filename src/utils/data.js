const date = new Date()
let hours = date.getHours()
const minutes = date.getMinutes()

export const time24hours = () => {
  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    hours = `0${minutes}`
  }

  return `${hours}:${minutes}`
}

export const time12Hours = () => {
  const antePost = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12
  return `${hours}:${minutes}${antePost}`
}
