# Graph Theory (Basic Concepts)

Graph is a *non linear* data structure, it contains a *set of points* known as nodes (or **vertices**) and set of *linkes* known as *edges* (or Arcs) which connects the vertices.

Graphs are used to represent *networks of communication*, *transportation system*, *website*, *maps*, *social networks*, *chemistry*, *games* etc.  

Let's see how to build and visit a Graph.

## Exercises

The exercises I have created give you specs to guide you through creating an undirect Graph by using an adjacency list.
After all the vertices and edges have been added to the Graph, the exercise requires to visit a Graph with a Breadth First Search Algorithm.

I have written some [Javascript tests](https://github.com/LondonAlgorithms/graph_theory/blob/master/spec/spec.js), you can run them by opening `SpecRunner.html`.

The Graph to build is this one:

![Test Graph](https://github.com/LondonAlgorithms/graph_theory/blob/master/breadth_first_traversal.jpg)

Steps to follow:

1. Build the Graph Topology
    - Define Vertex Class
    - addVertex to graph vertexList
    - addEdge to adjacency List

2. Graph Traversal Algorithms
    - Breadth First Search
    - Depth First Search

These links are really usefull to see how the two algorithms work:

 - [Depth First Search Animation](https://www.cs.usfca.edu/~galles/visualization/DFS.html)
 - [Breath First Search Animation](https://www.cs.usfca.edu/~galles/visualization/BFS.html)


## LINK TO SLIDE
[Graph Theory Slide](https://docs.google.com/presentation/d/1SlQUjDgFqSeDUCBup2AjtSvEEi-ZdvjW-JPTdr7BDRk/edit?usp=sharing)

### Breadth First Search Algorithm:

 - Define a queue
 - Add to queue the starting vertex (enqueue)
 - Visit the starting vertex
 - While there is a Vertex in the queue
    - Get the next vertex to visit from the queue
    - Get vertex neighbours via Adjancency List
        - For each vertex neighbour
        - If the neighbour has not been visited 
            → visit neighbour
            → add to the queue


Depth First Search algorithm is the same code, the only thing that changes is that 
it's using a **stack** instead of a **queue**.
