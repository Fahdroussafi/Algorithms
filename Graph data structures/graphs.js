class Graph {
    #nodes;

    constructor(){
        this.#nodes = {};
    }

    addNode(node){
        this.#nodes[node] = [];
    }

    addEdge (source, destination){
        if(!this.#nodes[source] || !this.#nodes[destination]) {
            return false;
        }

        if (!this.#nodes[source].includes(destination)){
            this.#nodes[source].push(destination)
        }

        if (!this.#nodes[destination].includes(source)){
            this.#nodes[destination].push(source)
        }

      }  
        showNodes() {
            console.log(this.#nodes);
        }
}
    
/**
    Vova -   Tim        Jeff
    |         |    \      |
    John -   Ann - Lee - Ron
    |
*/
let g = new Graph();

g.addNode ('Vova');
g.addNode ('Tim');
g.addNode ('John');
g.addNode ('Ann');
g.addNode ('Ron');
g.addNode ('Jeff');

g.addEdge('Tim','Vova');
g.addEdge('Tim','Ann');
g.addEdge('Tim','Lee');
g.addEdge('Ann','John');
g.addEdge('Ann','Lee');
g.addEdge('Ron','Lee');
g.addEdge('Ron','Lee');
g.addEdge('Ron','Jeff');

g.showNodes();
// console.log(g.dfs('Tim','Jeff'));
// console.log(g.bfs('Tim','Jeff'));
