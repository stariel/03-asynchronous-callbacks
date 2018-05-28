
'use strict';

const fs = require('fs');

module.exports = exports = (paths, callback) => {
  let resultArr = [];
  for (let i = 0; i < paths.length; i++) {
    fs.readFile(paths[i], (err, data) => {
      if (err) { 
        callback(err); }
      else {
        resultArr[i] = (data.toString().trim());
        if (resultArr.length === paths.length) {
          callback(null, resultArr);
        }
      }
    });
  }};