const factorial = number => {
  if (number === 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

factorial(3)

const whileFactorial = number => {
  let result = number

  if (number === 0 || number === 1) {
    return 1
  }

  while (number > 1) {
    number--
    result = result * number
  }

  return result
}

whileFactorial(4)
