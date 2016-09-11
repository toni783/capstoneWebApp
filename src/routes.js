angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        header: {component: 'header'},
        content: {component: 'home'},
        footer: {component: 'footer'}
      }

    })
    // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@':{component: 'footer'}
                }
            });
}
