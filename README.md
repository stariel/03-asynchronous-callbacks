[![Build Status](https://travis-ci.com/stariel/03-asynchronous-callbacks.svg?branch=master)](https://travis-ci.com/stariel/03-asynchronous-callbacks)

**03: Asynchronous Callbacks**

The function in reader.js takes in an array of file paths and returns an array with the string contents of these files in the order they were given in the argument array.

    reader() has an arity of one - the array of file paths. If an invalid file path is input, it throws an error. It uses fs to read the contents of the file and creates a result array with the file contents. This result array is returned by the function.