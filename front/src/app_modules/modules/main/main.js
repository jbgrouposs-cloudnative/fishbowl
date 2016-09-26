angular.module('MainCtrl',[]).controller('MainCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	function($stateParams, $rootScope, $scope, $state){
		$scope.menuToggled = true;
		
		$scope.menuLink = function(state){
			$scope.menuToggled = true;
			$state.go(state);
		};
	}
]);