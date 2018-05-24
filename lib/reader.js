
'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  fs.readFile( paths, (err, data) => {
    if(err) { throw(err); }
    else {
      for (let i = 0; i < paths.length; i++) {
        callback(null, data);
        let resultArr = [];
        resultArr.push(data.toString().trim());
        return resultArr;
      }
    }
  });
};