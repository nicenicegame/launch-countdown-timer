const times = document.querySelectorAll('.time')

let currentTime = 777341

function getTime(seconds) {
  const days = parseInt(seconds / (24 * 3600))
  const hours = parseInt((seconds % (24 * 3600)) / 3600)
  const minutes = parseInt((seconds % (24 * 3600 * 3600)) / 60)
  const sec = parseInt((seconds % (24 * 3600 * 3600 * 60)) / 60)
  console.log(days, hours, minutes, sec)
}

console.log(times)
getTime(currentTime)
