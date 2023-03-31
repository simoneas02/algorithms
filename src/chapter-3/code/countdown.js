const countdown = number => {
  if (number >= 1) {
    console.log({ number })
    return countdown(number - 1)
  }
}

countdown(5)

const whileCountdown = whileNumber => {
  while (whileNumber >= 1) {
    console.log({ whileNumber })
    whileNumber--
  }

  return
}

whileCountdown(5)
