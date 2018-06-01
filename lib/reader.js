
'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  let resultArr = [];
  let count = 0;
  for (let i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if (err) { 
        callback(err); }
      else {
        resultArr[i] = (data.toString().trim());
        count++;
        if (count === paths.length) {
          callback(null, resultArr);
        }
      }
    });
  }};