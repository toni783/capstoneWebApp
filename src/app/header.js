angular
  .module('app')
  .component('header', {
    templateUrl: 'app/header.html',
    controller: function () {
      this.hello = 'Hello header!';
    }
  });
