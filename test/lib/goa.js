var assert = require('assert');
Goa = require("../../lib/goa")

describe('Goa', function() {
  const goa = new Goa()	

  describe('#thingsToDo()', function() {
    it('should return array of 5 items', function(){
      assert.equal(goa.thingsToDo().length, 5);
    });
  });

  describe('#beaches()', function() {
    it('should return array of 2 items', function(){
      assert.equal(goa.beaches().length, 2);
    });
  });

   describe('#food()', function() {
    it('should return array of 3 items', function(){
      assert.equal(goa.food().length, 3);
    });
  });

  describe('#fleeMarkets()', function() {
    it('should return array of 3 items', function(){
      assert.equal(goa.fleeMarkets().length, 3);
    });
  });

  describe('#historicSites()', function() {
    it('should return array of 2 items', function(){
      assert.equal(goa.historicSites().length, 2);
    });
  });

  describe('#artGalleries()', function() {
    it('should return array of 2 items', function(){
      assert.equal(goa.artGalleries().length, 2);
    });
  });
});
