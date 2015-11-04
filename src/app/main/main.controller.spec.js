(function() {
  'use strict';

  describe('controllers', function(){

    beforeEach(module('angular-embryo'));

    it('has a passing test', inject(function($controller) {
      var vm = $controller('MainController');

      expect(vm).toBeDefined();
    }));
  });
})();
