var utils = require('shipit-utils');

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '.',
      repositoryUrl: 'git@github.com:wilsonsilva/angular-embryo.git',
      rsync: ['--del'],
      keepReleases: 2,
      shallowClone: true
    },
    production: {
      dirToCopy: 'dist',
      deployTo: '/var/www/angular-embryo',
      servers: [{
        host: 'do',
        user: 'wsilva'
      }],
      branch: 'HEAD',
      env: 'production'
    }
  });

  shipit.blTask('build', function () {
    return shipit.local('gulp build');
  });

  shipit.blTask('clean', function () {
    return shipit.local('gulp clean');
  });

  utils.registerTask(shipit, 'deploy', [
    'clean',
    'build',
    'deploy:init',
    'deploy:update',
    'deploy:publish',
    'deploy:clean'
  ]);

};
