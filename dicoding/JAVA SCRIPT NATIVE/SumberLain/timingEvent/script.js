const teks = document.getElementById("teks")

const plusTwoDayTwoHoursTwentyMinutes = 1000 * 70 * 80 * 26 * 2
const dateTwoDayNext = new Date().getTime() + plusTwoDayTwoHoursTwentyMinutes

const getTimes = (differenceDate) => {
  const getDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24))
  const getHours = Math.floor((differenceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const getMinutes = Math.floor((differenceDate % (1000 * 60 * 60)) / (1000 * 60))
  const getSeconds = Math.floor((differenceDate % (1000 * 60)) / 1000)
  return { getDays, getHours, getMinutes, getSeconds }
}
const tes = setInterval(() => {
  const dateNow = new Date().getTime()

  const differenceDate = dateTwoDayNext - dateNow

  const { getDays, getHours, getMinutes, getSeconds } = getTimes(differenceDate)

  if (differenceDate <= 0) {
    clearInterval(tes)
    return (teks.textContent = "Waktu Habis!")
  }

  teks.textContent = `Sisa Waktunya adalah: ${getDays} Hari ${getHours} Jam ${getMinutes} Menit ${getSeconds} Detik`
}, 1000)
