## Graphs

- graph is a collection of nodes and edges
- neighbors are nodes accessible by edges from current node
- adjacency list
  - list with keys and values
  - ex: key = node value = array of neighbors
### Acyclic 
  - no cycles - some path where you get back to where you started
### Cyclic
  - has cycles - to prevent infinite loop mark nodes as visited
### Depth First Traversal
- Travel as 'deep' as you can first
- Can tell you if you can get to some node
- uses stack
### Breath First Traversal
- Travel to each neighbor of a node first before moving deeper into the graph
- uses queue
### Depth vs Breath
- Travel to same nodes but different order
- Breath is more even in search than depth

### Pseudo code
- depth first - stack
  - print all node values in graph
  - a - f
  - push a in stack only and top of stack
  - pop a and print a
  - look at a's neighbors b & c
  - push c and b to stack b on top
  - pop b and becomes current and print
  - check b's neighbor d
  - push d becomes top of stack
  - pop top of stack d and print
  - check neighbors
  - push f to top of stack stack = f,c
  - pop f becomes current print
  - f has no neighbors so 
  - pop c, c becomes current and print
  - check c's neighbors
  - push e to stack
  - check e's neighbors none
  - pop e becomes current and print
  - stack is empty now end of algo
  - print = a, b, d, f, c, e,
- breath first - queue
  - start at a becomes current and print
  - consider a's neighbors
  - add b to back of queue
  - add c to back of queue
  - remove b becomes current and print
  - add d to queue queue d, c
  - remove front of queue c becomes current and print
  - check neighbors e
  - push e to back of queue queue e, d
  - remove d from front of queue now current and print
  - queue e
  - check d's neighbors f
  - add f to end of queue. queue f, e
  - remove e, becomes current, print
  - e has no neighbors
  - remove f, becomes current print
  - f has no neighbors
  - queue now empty