angular
  .module('app')
  .component('footer', {
    templateUrl: 'app/footer.html',
    controller: function () {
      this.hello = 'Hello footer!';
    }
  });
