// Helper function
const shortestDistanceNode = (distances, visited) => {
	let shortest = null

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest]
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node
		}
	}
	return shortest
}

const findShortestPathWithLogs = (graph, startNode, endNode) => {
	// establish object for recording distances from the start node
	let distances = {}
	distances[endNode] = "Infinity"
	distances = Object.assign(distances, graph[startNode])

	// track paths
  // don't know parent of end node yet so set to null
	let parents = { endNode: null }
  
	for (let child in graph[startNode]) {
		parents[child] = startNode
	}

	// track nodes that have already been visited
	let visited = []

	// find the nearest node
	let node = shortestDistanceNode(distances, visited)

	// for that node
	while (node) {
		// find its distance from the start node & its child nodes
		let distance = distances[node]
		let children = graph[node]
		// for each of those child nodes
		for (let child in children) {
			// make sure each child node is not the start node
			if (String(child) === String(startNode)) {
				console.log("don't return to the start node! 🙅")
				continue
			} else {
				console.log("startNode: " + startNode)
				console.log("distance from node " + parents[node] + " to node " + node + ")")
				console.log("previous distance: " + distances[node])
				// save the distance from the start node to the child node
				let newDistance = distance + children[child]
				console.log("new distance: " + newDistance)
				// if there's no recorded distance from the start node to the child node in the distances object
				// or if the recorded distance is shorter than the previously stored distance from the start node to the child node
				// save the distance to the object
				// record the path
				if (!distances[child] || distances[child] > newDistance) {
					distances[child] = newDistance
					parents[child] = node
					console.log("distance + parents updated")
				} else {
					console.log("not updating, because a shorter path already exists!")
				}
			}
		}
		// move the node to the visited set
		visited.push(node)
		// move to the nearest neighbor node
		node = shortestDistanceNode(distances, visited)
	}

	// using the stored paths from start node to end node
	// record the shortest path
	let shortestPath = [endNode]
	let parent = parents[endNode]
	while (parent) {
		shortestPath.push(parent)
		parent = parents[parent]
	}
	shortestPath.reverse()

	// return the shortest path from start node to end node & its distance
	let results = {
		distance: distances[endNode],
		path: shortestPath,
	}

	return results
}


let graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, finish: 3 },
	D: { finish: 1 },
	finish: {},
}
 console.log(findShortestPathWithLogs(graph, "start", "finish"))
console.log(findShortestPathWithLogs(graph, "A", "B"))