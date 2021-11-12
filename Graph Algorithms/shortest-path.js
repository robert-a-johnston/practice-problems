// complexity
// n = # nodes
// e = # edges e = n^2
// time = O(e)
// space = O(n)

// undirected graph 
// objective: return shortest path between start and end

const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges)
  const visited = new Set([ nodeA ])
  const queue = [ [nodeA, 0] ]
  
  
  while(queue.length > 0) {
    console.log('queue', queue)
    const [ node, distance ] = queue.shift()
    console.log('node', queue)
    
    if (node === nodeB) return distance

    for(let neighbor of graph[node]){
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        queue.push([neighbor, distance + 1])
        
      }
    }
  }
  return -1
  
  
}


const buildGraph = (edges) => {
  const graph = {}

  for(let edge of edges) {
    const [a, b] = edge

    if (!(a in graph )) graph[a] = []
    if (!(b in graph )) graph[b] = []

    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
  
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]

console.log(shortestPath(edges, 'w', 'z'))