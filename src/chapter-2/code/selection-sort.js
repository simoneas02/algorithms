const numberList = [5, 3, 6, 9, 2, 4, 7, 1]

const selectionSort = arr => {
  arr.forEach((_, index) => {
    // Finding the smallest number in the subarray
    let min = index
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== index) {
      // Swapping the elements
      ;[arr[index], arr[min]] = [arr[min], arr[index]]
    }
  })

  console.log(arr)

  return arr
}

selectionSort(numberList)
