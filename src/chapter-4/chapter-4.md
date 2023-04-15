# Chapter 4

- [Chapter 4](#chapter-4)
  - [D\&C| Divider \& conquer](#dc-divider--conquer)
  - [Remember recursion](#remember-recursion)
  - [Quicksort | `O(n log n)`](#quicksort--on-log-n)
  - [Example](#example)

## D&C| Divider & conquer

D&C gives you a new way to think about solving problems. D&C algorithms are recursive algorithms. There are two steps to solve a problem using it:

- Figure out the base case. This should be the simplest possible case.
- Divide or decrease your problem until it becomes the base case.

## Remember recursion

> When you're writing a recursive function involving an array, the base case is often an empty array or an array with one element. If you're stuck, try that first.

![recursive example](images/recursive-example.png)

## Quicksort | `O(n log n)`

Quicksort is a sorting algorithm. It's much faster than selection sort and is frequently used in real life. Quicksort also uses D&C.

- It creates two empty arrays, we can call `less[] and greater[]`,
- Choose a item as a pivot
- Find elements smaller than pivot and add to `less[]`
- Find elements larger than pivot and add to `greater[]`
- Then you can combine the whole thing like: `[...less, pivot, ...greater]`

The performance of Quicksort heavily depends on the pivot you choose.

If you divide the array in half every time and choose a random element in the array as the pivot, the call stack is much shorter.

## Example

- [Recursive sum of array](./code/recursive-sum.js)
- [Find a maximum umber of array](./code/maximum-number.js)
- [Counting the number of array items](./code/number-of-items.js)
- [Sort array using Quicksort](./code/quicksort.js)
