function HomeController($resource) {
  var ctrl = this;

  ctrl.hello = "hello content";
  ctrl.cont = 0;

  var User = $resource("http://localhost:1337/" + "user/:id", null, {
    'update': {
      method: 'PUT'
    }
  });

  ////GET ONE USER BY ID
  ctrl.oneUser = User.get({
      id: 2
    })
    .$promise.then(
      function(response) {
        ctrl.oneUser = response;
      },
      function(response) {
        ctrl.message = "Error: " + response.status + " " + response.statusText;
      }
    );

  ////DELETE ONE SPECIFIC USER BY HIS ID
  ctrl.deleteOne = function() {
    User.remove({
      id: 1
    });
  }

////SAVE A SPECIFIC USER
  ctrl.saveUser = function() {
    User.save({
      username: "gilbert5",
      password: "1234567ssdfds89",
      first_name: "asd",
      last_name: "dsd",
      address: "asd",
      profile_image: "pic",
      telephone: "123"
    });
  }

//UPDATE ONE USER BY HIS ID
  ctrl.updateUser = function(){
    var user = User.get({id:2});

    user.username="asdfaas";

    User.update({id:2},user);
  }

  ///GET ALL USERS
  ctrl.allUsers = User.query()
    .$promise.then(
      function(response) {
        ctrl.allUsers = response;
      },
      function(response) {
        ctrl.message = "Error: " + response.status + " " + response.statusText;
      }
    );



  ctrl.increase = function() {
    ctrl.cont++;
  }




}



angular
  .module('app')
  .component('home', {
    templateUrl: 'app/home.html',
    controller: HomeController
  });
