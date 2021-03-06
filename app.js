const times = document.querySelectorAll('.time')
const bottomCard = document.querySelectorAll('.bottom')

let currentTime = 777341

function getTime(seconds) {
  let days = parseInt(seconds / (24 * 3600)).toString()
  let hours = parseInt((seconds % (24 * 3600)) / 3600).toString()
  let minutes = parseInt(((seconds % (24 * 3600 * 3600)) / 60) % 60).toString()
  let sec = parseInt((seconds % 3600) % 60).toString()

  if (days < 10) {
    days = `0${days}`
  }
  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }

  return [days, hours, minutes, sec]
}

function updateTime() {
  const formattedTime = getTime(currentTime)
  times.forEach((time, index) => {
    time.innerText = formattedTime[index]
  })
}

updateTime()

setInterval(() => {
  currentTime--
  updateTime()
}, 1000)

getTime(currentTime)
