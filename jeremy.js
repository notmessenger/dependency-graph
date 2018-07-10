#!/bin/node

const DepGraph = require('./lib/dep_graph').DepGraph;

//const graph = new DepGraph({ circular: false });
const graph = new DepGraph({
    circular: true,
    denoteCircular: true
//    denoteCircular: false
});

graph.addNode('a');
graph.addNode('b');
graph.addNode('c');
graph.addNode('d');

graph.addDependency('a', 'b');
graph.addDependency('b', 'c');
graph.addDependency('c', 'a');
graph.addDependency('d', 'a');

console.log('dependenciesOf: ', graph.dependenciesOf('b'))
console.log('overallOrder: ', graph.overallOrder())
