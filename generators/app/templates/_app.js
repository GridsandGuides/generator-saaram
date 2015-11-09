'use strict';

var app = angular
        .module('minovateApp', []);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/app/dashboard');

        $stateProvider
                .state('login', {
                    url: '/login',
                    controller: 'LoginCtrl',
                    templateUrl: 'views/tmpl/pages/login.html'
                })
                .state('signup', {
                    url: '/signup',
                    controller: 'SignupCtrl',
                    templateUrl: 'views/tmpl/pages/signup.html'
                })
                .state('app', {
                    //abstract: true,
                    url: '/app',
                    templateUrl: 'views/tmpl/app.html'
                })
                .state('app.dashboard', {
                    url: '/dashboard',
                    template: '<div ui-view></div>'

                })
                .state('app.dashboard.index', {
                    url: '/',
                    templateUrl: 'views/tmpl/dashboard.html',
                    controller: 'DashboardCtrl'
                });
    }]);





app.run(['$rootScope', '$state', '$stateParams', '$http', function ($rootScope, $state, $stateParams, $http) {

        
}]);





