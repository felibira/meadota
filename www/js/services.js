angular.module('starter.services', ['ngResource'])
.constant("configs", {
     "enderecoapi": "http://138.197.191.31:3000/v1/"
  })
.factory('Auth',function($http, configs , $state){
    return{
        login: function(email, password){
           return $http.post(configs.enderecoapi + 'auth/signin', {
              email : email,
              password: password
            });
        },
        cadastro: function(){
            return true;
        },
        verificaLogin: function(usuario){
            return this.login(usuario.username, usuario.password).then(
                function(response){
                    console.log('OK');
                    console.log(response);
                    return response.data;
                },
                function(error){
                    console.log('ERR');
                    console.log(error);
                    return response.error;
                });
        },
        salvaLocalStorage: function(nome, valor){
            localStorage.setItem(nome, valor);
        }
    }
})
  .factory('AnimAPI', function($resource, configs) {
    var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6MTksImlhdCI6MTUwNzY2MjIzOCwiZXhwIjoxNTA3NzQ4NjM4fQ.7g19hUlitsersIySdOBPsIZ5XY2RsWH2nFDrUftVeLgMli8VHEYCQvF9C_URwQlocMMz1x9Jld08qQXk5vulgw";
    var campoToken = {
      'Authorization': 'Bearer '+ token
    };
  return $resource(configs.enderecoapi + 'animals/:id', { id: '@_id' },
    {
      update: {
        method: 'PUT',
        headers: campoToken
      },
      query: {
        headers: campoToken
      },
      save: {
        headers: campoToken
      },
      remove: {
        headers: campoToken
      },
      delete: {
        headers: campoToken
      },
      get: {
        headers: campoToken
      }

    });
  })
