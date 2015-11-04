(function() {
  'use strict';

  angular
    .module('angular-embryo')
    .directive('embryoNavbar', embryoNavbar);

  /** @ngInject */
  function embryoNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
    }
  }

})();
