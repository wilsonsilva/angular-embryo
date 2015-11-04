(function() {
  'use strict';

  angular
    .module('angular-embryo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
