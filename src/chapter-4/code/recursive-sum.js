const sum = arr => {
  if (arr.length === 0) {
    return 0
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}

sum([1, 2, 3])
