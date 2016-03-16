'use strict';

// Configure the 'essential' module routes

angular.module('essential').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('essential', {
        url: '/essential',
        templateUrl: 'modules/essential/client/views/essential.client.view.html',
        
      });
  }
]);
