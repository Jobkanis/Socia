module.exports = function(modules, configurations, classes) {
    var neo4j = require('neo4j-driver').v1;
    var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
}