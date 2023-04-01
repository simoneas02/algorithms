const maximumNumber = list => {
  if (list.length <= 1) {
    return console.log("The array must have at least two items")
  }

  if (list.length === 2) {
    return list[0] > list[1] ? list[0] : list[1]
  }

  const subMax = maximumNumber(list.slice(1))

  return list[0] > subMax ? list[0] : subMax
}

maximumNumber([20, 13, 33])
