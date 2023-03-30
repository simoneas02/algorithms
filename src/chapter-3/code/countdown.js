const countdown = number => {
  console.log(number)

  if (number <= 1) {
    return
  }

  countdown(number - 1)
}

countdown(5)
