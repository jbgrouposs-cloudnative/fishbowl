angular.module('SignInCtrl',[]).controller('SignInCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	function($stateParams, $rootScope, $scope, $state){
		$scope.enableErrorMessage = false;
		
		$scope.inputChange = function() {
			$scope.enableErrorMessage = false;
		};
		
		$scope.signIn = function(user) {
			if ($scope.signInForm.$valid) {
				var userInfo = {
					userId: '99999',
					userName: 'Test User'
				};
				$rootScope.user = userInfo;
				$state.go('main.list');
			}
		};
		
	}
]);