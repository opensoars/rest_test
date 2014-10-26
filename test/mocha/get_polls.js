var assert = require('assert'),
    http = require('http');

var host = 'localhost:80';

require('./../../index.js');


describe('#get_polls', function (){

  it('returns an empty array of polls', function (done){

    http.get('http://localhost:80/api/polls', function (res){

      var d = ''; res.on('data', function (c){ d += c; });

      res.on('end', function (){
        d = JSON.parse(d);

        assert.equal(d.length, 0);
        done();
      });

    });

  });

});

