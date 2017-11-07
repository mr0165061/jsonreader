const _ = require('lodash');
var jsonfile = require('jsonfile')
var file = "jsonfiles/data.json";

jsonfile.readFile(file, (err, data) => {
    if (err) {
        console.error(err);
    }
    _.map(data, (x) => {
        console.log(x);
    });
});