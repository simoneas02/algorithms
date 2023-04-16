# Chapter 7

- [Chapter 7](#chapter-7)
  - [Dijkstra's algorithm](#dijkstras-algorithm)

## Dijkstra's algorithm

You'll use Dijkstra's algorithm to go from start to finish in the shortest possible time, and breadth-first search will find the shortest path between two points and it's not necessarily the fastest path.

When you work with Dijkstra's algorithms, each edge in the graph has a number associate with it. These are called weights.

Dijkstra's algorithm has four steps:

- Find the cheapest node. This is the node you can get to in the least amount of time.
- Check whether there's a cheaper path to the neighbors of this node.
- Repeat until you've done this for every node in the graph.
- Calculate the final path.
