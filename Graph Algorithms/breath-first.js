// STEPS
// 1. initialize queue (first in first out)
// 2. visit initial node and mark as visited
// 3. see unvisited adjacent node (a)  queue = a
//    mark adjacent node as visited and add to queue
// 4. visit any other adjacent unvisited node and enqueue it (b) queue = b, a
// 5. repeat for any other unvisited nodes (c) queue = c, b, a
// 6. when no other unvisited nodes dequeue first node visited (a) queue = c, b
// 7. visit any unvisited nodes from dequeued node (a) (d)  enqueue (d)  queue = d , c, b
// 8. once visited all nodes dequeue remaining nodes


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