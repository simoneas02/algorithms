# Chapter 5

- [Chapter 5](#chapter-5)
  - [Hash functions](#hash-functions)
  - [Collisions](#collisions)

## Hash functions

Hash function is a function where you put in a string and you get back a number. So a hash function maps strings to numbers. They're also known as hash maps, maps, dictionaries, ans associative arrays. And hash tables are fast.

You'll probably never have to implement hash tables yourself. Any good language have an implementation. Hash table has keys and values and maps keys to the values.

Hash table is one of the most useful basic data structures. Hash tables are a powerful data structure because they're so fast and they let you model data in a different way. Hash tables have really fast search, insert, and delete.

Hash tables are great when you want to:

- Modeling relationships from one thing to another thing
- Filtering out duplicates

## Collisions

Collisions is when two keys have been assigned to the same slot.
To avoid collisions, you need:

- A low factor
- A good hash function

The load factor of a hash table is easy to calculate: number-of-items/total-numbers-of-slots. Load factor measures how many empty slots remain in your hash table. Having a load factor greater than one means you have more items than slots in your array. With a lower load factor, you'll have fewer collisions, and your table will perform better.

Once your load factor is greater than 0.7, it's time to resize your hash table.
