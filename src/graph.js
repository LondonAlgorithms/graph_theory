/*
  Define a:
   - Graph Class
   - Vertex Class
   - Edge are represented in the AdjacencyList
   - a function to addVertex to a Graph
   - a function to addEdge to Graph to describe Graph Topology
   - a function to visit a graph with Breadth First Search
 */

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
function Vertex() {
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
};

/**
 * Update the property wasVisited to true
 * @param vertex
 */
Graph.prototype.visit = function(vertex) {
};

/**
 * Visit a Graph with Breadth First Search
 * @param startVertexLabel
 *
 * Keep in mind:
 * - it uses a queue
 * - it starts by adding to the queue the starting vertex
 * - while there is something on the queue
 * - visit the next vertex on the queue
 * - add all vertex neighbours to the queue
 */
Graph.prototype.bfs = function(startVertexLabel) {
};

