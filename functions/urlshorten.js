
const allChara = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

module.exports = (shortenURL) => {
  let randomNumber = ""
  for (let i = 0; i < shortenURL; i++) {
    const randomIndex = Math.floor(Math.random() * allChara.length)
    const chooseChar = allChara[randomIndex]
    randomNumber += chooseChar
  }
  return randomNumber
}