'use strict';

const reader = require('../lib/reader.js');

describe('File Reader Module', () => {

  it('when given a nonexistant file path, it returns an error', (done) => {
    let file = [`[${__dirname}/../data/bad.txt]`];
    reader(file, (err, data) => {
      expect(err).not.toBeNull();
      console.log(data);
      done();
    });
  });

  it('when given a real file it reads (and stringifys) the contents', () => {
    let file = [`${__dirname}/../data/apples.txt`];
    reader(file, (err,data) => {
      expect(err).toBeNull();
      expect(typeof data).toBe('object');
    });
  });

  it('when given a real file, returns the contents', (done) => {
    let file = [`${__dirname}/../data/apples.txt`,`${__dirname}/../data/bananas.txt`];
    reader(file, (err,data) => {
      expect(err).toBeNull();
      expect(data).toEqual(['words about apples', 'words about bananas']);
      done();
    });
  });

  it('when given multiple files, returns the contents in order', (done) => {
    let file = [`${__dirname}/../data/apples.txt`, `${__dirname}/../data/cucumbers.txt`,`${__dirname}/../data/bananas.txt`];
    reader(file, (err,data) => {
      let actual = data[0];
      let expected = 'words about apples';
      expect(err).toBeNull();
      expect(actual).toBe(expected);
      expected = true;
      actual = data[1].startsWith('cucumbers');
      expect(err).toBeNull();
      expect(actual).toBe(expected);
      actual = data[2];
      expected = 'words about bananas';
      expect(err).toBeNull();
      expect(actual).toBe(expected);
      done();
    });
  });
});