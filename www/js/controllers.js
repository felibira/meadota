angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth, $rootScope) {
  
  
  var checaLogin = localStorage.getItem("user");
  if (checaLogin && checaLogin.length > 0){
    $rootScope.estaLogado = true;
  }
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
$scope.logout = function(){
  $rootScope.estaLogado = false;
  localStorage.removeItem("user");
}
  $scope.login = function() {
    $scope.modal.show();
  };

  $scope.doLogin = function() {
    Auth.verificaLogin($scope.loginData).then(ret => {
      console.log('voltei com :');
      console.log(ret);
      $rootScope.estaLogado = true;
      Auth.salvaLocalStorage("user",JSON.stringify(ret.data));
    });
    console.log('Doing login', $scope.loginData);
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



