/**
 * IONIC APP
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  
}


app = angular.module('app', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    .state('page2', {
      url: '/index',
      templateUrl: 'page2.html',
      controller: 'startCtrl'
    })
    
    ;

  // Initial Route
  $urlRouterProvider.otherwise('/index');
  

})

//CONTROLLERS
app.controller('startCtrl',function($scope, $location, $rootScope, $window){


  $scope.test = function() {
    alert('')
  };

});



