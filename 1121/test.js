var glob = require('glob');

var pattern = '/Users/gxx/Desktop/study/lean-node/';
glob(pattern, {nodir: true}, function (err, files) {
    if(err) 
        console.log(err);
    else
        console.log(files);
})