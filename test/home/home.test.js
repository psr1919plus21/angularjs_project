'use strict';

describe('[[--  Example test  --]]', function() {

  describe('<<Detailed description of example test>>', function(){

    beforeEach(module('angularProject'));

    it('-> should inject simple values from homeCtrl <-', inject(function($controller) {
      var scope = {},
        ctrl = $controller('homeCtrl', {$scope:scope});
      
      expect(scope.simpleValue).toEqual(1);
      expect(scope.simpleStringValue).toEqual("simpleString");

      
    }));

  });
});