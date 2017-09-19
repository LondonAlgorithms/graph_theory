describe('Undirected Graph', function(){
  context('Build the Graph Topology', function() {
    context('', function() {
      it('Define a Vertex', function() {
        var nodeA = new Vertex('nodeA');

        // Vertex should have a label
        expect(nodeA.label).to.be.equal('nodeA');

        // Vertex should have a property wasVisited initialized to false
        expect(nodeA.wasVisited).to.be.false;

      });

      it('addVertex updates graph vertexList', function() {
        var graph = new Graph();

        graph.addVertex('S');

        // vertexList should have as a key the vertex label and as a value an instance of Vertex
        expect(graph.vertexList['S'] instanceof Vertex).to.be.true;
        expect(graph.vertexList['S']).to.eql(new Vertex('S'));
      });

      it('addEdge updates adjacency List', function() {
        var graph = new Graph();

        // Adding Vertices
        graph.addVertex('S');
        graph.addVertex('A');

        // Create a link between vertices
        graph.addEdge('S', 'A'); // This means that S has a neighbour A, and A has a neighbour S (this graph is undirected)

        // AdjacencyList for vertex S and A should be an array
        expect(Array.isArray(graph.adjacencyList['S'])).to.be.true;
        expect(Array.isArray(graph.adjacencyList['A'])).to.be.true;

        // AdjacencyList for vertex S and A should contain one element
        expect(graph.adjacencyList['S'].length).to.be.equal(1);
        expect(graph.adjacencyList['A'].length).to.be.equal(1);

        // AdjacencyList for vertex S should be A
        expect(graph.adjacencyList['S']).to.eql([graph.vertexList['A']]);

        // AdjacencyList for vertex A should be S
        expect(graph.adjacencyList['A']).to.eql([graph.vertexList['S']]);

      });

      it('Vertex S has three neighbours (A, B, C)', function() {

        var graph = new Graph();

        // Adding Vertices
        graph.addVertex('S');
        graph.addVertex('A');
        graph.addVertex('B');
        graph.addVertex('C');

        // Adding links between Vertices
        graph.addEdge('S', 'A');
        graph.addEdge('S', 'B');
        graph.addEdge('S', 'C');

        expect(graph.adjacencyList['S'].length).to.be.equal(3);
        expect(graph.adjacencyList['S']).to.eql([graph.vertexList['A'], graph.vertexList['B'], graph.vertexList['C']]);

        // Vertex A has only one neighbour
        expect(graph.adjacencyList['A'].length).to.be.equal(1);
        // Vertex A neighbour is S
        expect(graph.adjacencyList['A'][0].label).to.be.equal('S');

        // Vertex B has only one neighbour
        expect(graph.adjacencyList['B'].length).to.be.equal(1);
        // Vertex B neighbour is S
        expect(graph.adjacencyList['B'][0].label).to.be.equal('S');

        // Vertex C has only one neighbour
        expect(graph.adjacencyList['C'].length).to.be.equal(1);
        // Vertex C neighbour is S
        expect(graph.adjacencyList['C'][0].label).to.be.equal('S');
      });
    });
  });

  // Refer to breadth_first_traversal.jpg
  context('Graph Traversal', function() {
    it('Visit a node', function() {
      var vertexLabel = 'S';

      var graph = new Graph();
      graph.addVertex(vertexLabel);

      var insertedVertex = graph.vertexList[vertexLabel];

      expect(insertedVertex.wasVisited).to.be.false;

      graph.visit(vertexLabel);

      expect(insertedVertex.wasVisited).to.be.true;
    });

    it('Breadth First Search', function() {
      var graph = new Graph();
      var vertexList = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

      for (var i=0; i< vertexList.length; i++) {
        graph.addVertex(vertexList[i]);
      }

      graph.addEdge('S', 'A');
      graph.addEdge('S', 'B');
      graph.addEdge('S', 'C');
      graph.addEdge('A', 'D');
      graph.addEdge('B', 'E');
      graph.addEdge('C', 'F');
      graph.addEdge('D', 'G');
      graph.addEdge('E', 'G');
      graph.addEdge('F', 'G');

      var startVertex = 'S';
      var path = graph.bfs(startVertex);


      expect(path).to.eql(['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']);

      // All graph vertices have been visited
      Object.keys(graph.vertexList).forEach(function(key,index) {
        expect(graph.vertexList[key].wasVisited).to.equal(true);
      });
    });

    it('Depth First Search', function() {
      var graph = new Graph();
      var vertexList = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

      for (var i=0; i< vertexList.length; i++) {
        graph.addVertex(vertexList[i]);
      }

      graph.addEdge('S', 'A');
      graph.addEdge('S', 'B');
      graph.addEdge('S', 'C');
      graph.addEdge('A', 'D');
      graph.addEdge('B', 'E');
      graph.addEdge('C', 'F');
      graph.addEdge('D', 'G');
      graph.addEdge('E', 'G');
      graph.addEdge('F', 'G');

      var startVertex = 'S';
      var path = graph.dfs(startVertex);

      expect(path).to.eql(['S', 'C', 'F', 'G', 'E', 'B', 'D', 'A']);

      // All graph vertices have been visited
      Object.keys(graph.vertexList).forEach(function(key,index) {
        expect(graph.vertexList[key].wasVisited).to.equal(true);
      });
    });
  });

});
