// complexity
// n = # nodes
// e = # edges e = n^2
// time = O(e)
// space = O(n)

// undirected graph 
// objective: find component with most nodes

const largestComponent = (graph) => {
  // set of nodes visited - prevents infinite loop
  const visited = new Set()
  // largest component = # nodes
  let largest = 0
  // hops to different components
  for(let node in graph) {
    console.log(visited)
  
   let temp = explore(graph, node, visited)

   if(temp > largest) largest = temp
  }
  return largest
}

const explore = (graph, currentNode, visited) => {
  // count number of nodes visited 1 is starting node
  let count = 1
  // string keeps all values same type
  //don't count nodes visited
  if(visited.has(String(currentNode))) return 0

  // add node to visited set
  visited.add(String(currentNode))

  for(let neighbor of graph[currentNode]) {
    
   count += explore(graph, neighbor, visited)
   
  }
  
  return count
}





const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

console.log(largestComponent(graph))