const numbers = [20, 3, 14, 17, 15, 2, 10, 30]

// I chose the pivot to be the first item in the array
const quicksort = list => {
  if (list.length < 2) {
    return list
  }
  const pivot = list[0]

  const smaller = list.filter(item => item < pivot)
  const bigger = list.filter(item => item > pivot)

  return [...quicksort(smaller), pivot, ...quicksort(bigger)]
}

console.log(quicksort(numbers))
