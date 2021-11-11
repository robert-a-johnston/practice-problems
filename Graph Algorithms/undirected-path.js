// complexity
// n = # nodes
// e = # edges
// time = O(e)
// space = O(n)

// undirected graph 
// objective: can you get from nodeA to node B

const undirectedPath = (edges, nodeA, nodeB) => {
  // convert edges to graph hash table
  const graph = buildGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
}

// function to traverse graph
// visited is a Set that tracks if you have visited a node
const hasPath = (graph, src, dst, visited) => {
  if(visited.has(src)) return false
  if (src === dst) return true

  visited.add(src)

  for( let neighbor of graph[src]) {
   if(hasPath(graph, neighbor, dst, visited) === true) {
     return true
   }
  }
  return false
}

// converts edge list to adjacency list
const buildGraph = (edges) => {
  const graph = {}

  for (let edge of edges) {
    const [ a, b] = edge
    if (!(a in graph )) graph[a] = []
    if (!(b in graph )) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }

  return graph
}





const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
]

console.log(undirectedPath(edges, 'j', 'm'))