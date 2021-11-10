
// iteratively only
const breathFirstPrint = (graph, source) => {

  const queue = [ source ]
  
  // array.shift removes last element
  // array.push adds to array

  while(queue.length > 0) {
    current = queue.shift()
    console.log(current)

    for(let neighbor of graph[current]){
      queue.push(neighbor)
    }
  }
}






const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

breathFirstPrint(graph, 'a')