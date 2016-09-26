var app = angular.module('app',
    ['ui.router',
     'restangular',
     'ui.bootstrap',
     'ngAnimate',
     'ngSanitize',
     'ui.validate',
     'ngTouch',
     'SignInCtrl',
     'MainCtrl',
     'ListCtrl',
     'DetailCtrl'],
    ['$stateProvider',
     '$urlRouterProvider',
function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('sign-in',{
            url:'/',
            templateUrl:'app_modules/modules/sign-in/sign-in.html',
            controller:'SignInCtrl'
        })
        .state('main',{
            url:'/main',
            templateUrl:'app_modules/modules/main/main.html',
            controller:'MainCtrl'
        })
        .state('main.list',{
            url:'/list',
            templateUrl:'app_modules/modules/list/list.html',
            controller:'ListCtrl'
        })
        .state('main.new-entry',{
            url:'/new-entry',
            templateUrl:'app_modules/modules/detail/detail.html',
            controller:'DetailCtrl'
        })
        .state('main.detail',{
            url:'/detail',
            params: {rowData: null},
            templateUrl:'app_modules/modules/detail/detail.html',
            controller:'DetailCtrl'
        });
}]);
