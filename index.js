const _ = require('underscore');

//first assumes it's a built in module
//secondly assumes it is a file present in project if ./ written before name
//Third assumes it's a module present in node_module folder in our project
var result = _.contains([1,2,3],2);
console.log(result);