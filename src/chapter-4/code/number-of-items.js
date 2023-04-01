const numberOfItems = list => {
  if (list.length == 0) {
    return 0
  }

  if (list.length > 0) {
    return 1 + numberOfItems(list.slice(1))
  }
}

const arr = [1, 2, 3]

numberOfItems(arr)
