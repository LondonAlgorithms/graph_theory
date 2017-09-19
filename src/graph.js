function Graph() {
  // Keep track of each vertex
  this.vertexList = {};
  // Graph AdjacencyList
  this.adjacencyList = {};
}
/**
 * Create a Vertex
 * @constructor
 *
 * A Vertex has two properties: label and wasVisited
 */
function Vertex(label) {
  this.label = label;
  this.wasVisited = false;
}
/**
 * Add a vertex to Graph vertexList
 * @param label
 *
 * For instance:
 * addVertex('A'), addVertex('B')
 *
 * this.vertexList = {
 *  'A': vertexAInstance,
 *  'B': vertexBInstance,
 * }
 */
Graph.prototype.addVertex = function(label) {
  this.vertexList[label] = new Vertex(label);
  this.adjacencyList[label] = [];
};

/**
 * Given two vertex label updates the graph adjacencyList
 *
 * @param labelVertexA, labelVertexB
 *
 * For instance: addEdge('A','B')
 * adjacencyList = {
 *  'A' => [B]
 *  'B' => [A]
 * }
 *
 * addEdge('A', 'C')
 *
 * adjacencyList = {
 *  'A' => [B, C]
 *  'B' => [A]
 * }
 * Note: the adjacencyList key are label string instead the value are Vertex Object
 */
Graph.prototype.addEdge= function(labelVertexA, labelVertexB) {
  var vertexA = this.vertexList[labelVertexA];
  var vertexB = this.vertexList[labelVertexB];

  this.adjacencyList[vertexA.label].push(vertexB);
  this.adjacencyList[vertexB.label].push(vertexA);
};

/**
 * Update the property wasVisited to true
 * @param vertex
 */
Graph.prototype.visit = function(vertex) {
  vertex.wasVisited = true;
};

Graph.prototype.logQueue = function(queue) {
  console.log(queue.map(function(item) { return item.label }));
};

/**
 * Visit a Graph with Breadth First Search
 * @param startVertexLabel
 *
 * Keep in mind:
 * - it uses a queue
 * - it starts by adding to the queue the starting vertex
 * - Visit the starting vertex
 * - while there is something on the queue
 * - Get vertex neighbours
 * - for each neighbour that has not been visited
 *      - visit the neighbour
 *      - add all vertex neighbours to the queue
 */
Graph.prototype.bfs = function(startVertexLabel) {

  var queue = [];
  var start = this.vertexList[startVertexLabel];
  var path = [];

  queue.push(start);

  while (queue.length) {
    var nextVertex = queue.shift();

    if (nextVertex.wasVisited === false) {

      this.visit(nextVertex);

      path.push(nextVertex.label);

      var neighbours = this.adjacencyList[nextVertex.label];

      for (var i = 0; i < neighbours.length; i++) {

        if (neighbours[i].wasVisited === false) {
          queue.push(neighbours[i]);
        }

      }

    }

  }

  return path;
};

/**
 * If you have time, try to implement DFS, just change the data structure to be a stack
 * - Use a stack
 * - Add starting vertex to a stack
 * - While there is an element on the stack
 * - if the vertex has not been visited
 *    - visit the vertex
 *    - get all vertex neighbours
 *      - for each neighbour if has not been visited
 *        - add to stack
 */
Graph.prototype.dfs = function(startVertexLabel) {

};