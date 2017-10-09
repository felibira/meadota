angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('CachorroCtrl', function($scope) {
  $scope.titulo="Aqui teremos detalhes dos cachorros, aguardem";
  $scope.animal={
    "id":"1",
    "nome":"Thor",
    "descricao":" Pensando mais a longo prazo, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das formas de ação. Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos paradigmas corporativos.",
    "contato":"2345678",
    "imagem":"http://via.placeholder.com/350x150"
  };
})
.controller('CachorrosCtrl', function($scope) {
  $scope.titulo="Busca por cachorros";
  $scope.animais = [{
    "id":"1",
    "nome":"Thor",
    "descricao":" Pensando mais a longo prazo, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das formas de ação. Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos paradigmas corporativos.",
    "contato":"2345678",
    "imagem":"http://via.placeholder.com/350x150"
  },
  {
    "id":"2",
    "nome":"Eike",
    "descricao":"  o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das formas de ação. Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos paradigmas corporativos.",
    "contato":"321321321",
    "imagem":"http://via.placeholder.com/350x150"
  },
  {
    "id":"3",
    "nome":"Cunha",
    "descricao":" Pensando mais a longo prazo, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das formas de ação. Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos paradigmas corporativos.",
    "contato":"765765765",
    "imagem":"http://via.placeholder.com/350x150"
  },
  {
    "id":"4",
    "nome":"Aecio",
    "descricao":" Pensando mais a longo prazo, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das formas de ação. Podemos já vislumbrar o modo pelo qual a complexidade dos estudos efetuados cumpre um papel essencial na formulação dos paradigmas corporativos.",
    "contato":"2345678",
    "imagem":"http://via.placeholder.com/350x150"
  }];
})
.controller('GatosCtrl', function($scope) {
  $scope.animais = [];
})
.controller('PerfilCtrl', function($scope) {
  
})
;



