const _ = require('lodash');
var jsonfile = require('jsonfile')
var file = "jsonfiles/data.json";

jsonfile.readFile(file, function(err, obj) {
    var result = _.mapValues(obj, (value, prop) => {
        return {prop: prop, value: value };
    });
    console.log(result);
});