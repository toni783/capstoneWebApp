angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: function () {
      this.hello = 'Hello footer!';
    }
  });
