angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, $rootScope) {

  var usertemp = localStorage.getItem("user");
  if(usertemp.length >0){
    $rootScope.estaLogado = true;
  }

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.logout = function(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    $rootScope.estaLogado = false;
  }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    Auth.verificaLogin($scope.loginData).then(ret => {
      console.log('voltei com :');
      console.log(ret);
      Auth.salvaLocalStorage("user",JSON.stringify(ret.data));
      Auth.salvaLocalStorage("token",ret.data.token);
      $rootScope.estaLogado = true;
      $rootScope.token = ret.data.token;
      $rootScope.$broadcast('autenticado');
    });

    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('CachorroCtrl', function($scope, AnimAPI, $state, $stateParams) {

  console.log($stateParams);
  var idAnimal = $stateParams.id;
  AnimAPI.query({id: idAnimal}, function(anim){
    console.log(anim.data);
    $scope.animal = anim.data;
    $scope.titulo = anim.data.nome;
  })

})
.controller('CachorrosCtrl', function($scope, AnimAPI) {
  $scope.titulo="Busca por cachorros";

  AnimAPI.query(function(anim){
    console.log(anim.data);
    $scope.animais = anim.data;
  });

})
  .controller('GatoCtrl', function($scope, AnimAPI, $state, $stateParams) {
    var idAnimal = $stateParams.id;
    AnimAPI.query({id: idAnimal}, function(anim){
      console.log(anim.data);
      $scope.animal = anim.data;
      $scope.titulo = anim.data.nome;
    })

  })
.controller('GatosCtrl', function($scope, AnimAPI) {
  $scope.titulo="Busca por gatos";

  AnimAPI.query(function(anim){
    console.log(anim.data);
    $scope.animais = anim.data;
  });
})
.controller('PerfilCtrl', function($scope) {
  var usertemp = localStorage.getItem("user");
  console.log(usertemp);
  $scope.user = JSON.parse(usertemp).user;
})
;



