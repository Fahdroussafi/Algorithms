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

/**
    Vova -   Tim        Jeff
    |         |    \      |
    John -   Ann - Lee - Ron
    |
*/
let g = newGraph();



















}