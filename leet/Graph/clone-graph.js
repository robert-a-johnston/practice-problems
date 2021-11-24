// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). 
// For example, the first node with val == 1, the second node with val == 2, 
// and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a 
// finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must 
// return the copy of the given node as a reference to the cloned graph.

  // @param {Node} node
  // @return {Node}

  // node def
  class Node {
    constructor(val, neighbors) {
      this.val = val === undefined ? 0 : val;
      this.neighbors = neighbors === undefined ? [] : neighbors;
    }
  };

 // DFS approach
var cloneGraph = function(node) {
 
  // Nodes we have already copied
  const visited = {};

  // DFS function to copy graph
  const dfs = (node) => {
      if (!node) return node;
      // If we have seen this node before, return it
      if (visited[node.val]!=null) return visited[node.val];

      // Create base for copied node
      const root = new Node(node.val);
      // Add this copied node to group of nodes we hav copied
      visited[node.val] = root;
      console.log(node.neighbors)
      // Add copied neighbors to the current copied node
      node.neighbors.forEach(n => root.neighbors.push(dfs(n)))
      return root;
  }

  // Return new copied graph
  return dfs(node);
};

// * adjList must be populated with values to work
const adjList = new Node()


console.log(cloneGraph(adjList))
