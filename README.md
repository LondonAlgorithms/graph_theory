# Graph Theory (Basic Concepts)

Graph is a *non linear* data structure, it contains a *set of points* known as nodes (or **vertices**) and set of *linkes* known as *edges* (or Arcs) which connects the vertices.

Graphs are used to represent *networks of communication*, *transportation system*, *website*, *maps*, *social networks*, *chemistry*, *games* etc.  

Let's see how to build and visit a Graph.

## Exercises

The exercises I have created give you specs to guide you through creating a Graph by using an Adjacency List.
After all the vertices and edges have been added to the Graph, the exercise requires to visit a Graph with a Breadth First Search algorithm.

I have written some [Javascript tests](https://github.com/LondonAlgorithms/graph_theory/blob/master/spec/spec.js), you can run them by opening `SpecRunner.html`.

![Graph](https://github.com/LondonAlgorithms/graph_theory/blob/master/breadth_first_traveral.jpg)

1. Build the Graph Topology
    - Define Vertex Class
    - addVertex to graph vertexList
    - addEdge to adjacency List

2. Graph Traversal
    - Visit a node
    - Breadth First Search
    - Depth First Search
