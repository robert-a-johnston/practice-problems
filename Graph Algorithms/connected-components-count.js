// complexity
// n = # nodes
// e = # edges
// time = O(e)
// space = O(n)

// undirected graph 
// objective: count the number of individual components in graph

const connectedComponentsCount = (graph) => {
  let count = 0
  const visited = new Set()
  for(let node in graph) {
    console.log(visited)
  
    if(explore(graph, node, visited) === true) {
      count += 1
    }
  }
  return count
}


const explore = (graph, currentNode, visited) => {
  if(visited.has(String(currentNode))) return false

  visited.add(String(currentNode))

  for(let neighbor of graph[currentNode]) {
    explore(graph, neighbor, visited)
  }

  return true
}



const graph = {
  0: [0, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}

console.log(connectedComponentsCount(graph))