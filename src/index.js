

angular
  .module('app', ['ui.router', 'ngResource'])
  .factory('userFactory', ['$resource', function ($resource) {


    return $resource("http://localhost:1337/" + "user/:id", null, {
      'update': {
        method: 'PUT'
      }
    });

}]);
