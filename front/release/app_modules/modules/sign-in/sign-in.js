angular.module('SignInCtrl',[]).controller('SignInCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	'Restangular',
	function($stateParams, $rootScope, $scope, $stat, Restangular){
		$scope.enableErrorMessage = false;
		
		$scope.inputChange = function() {
			$scope.enableErrorMessage = false;
		};
		

		
		$scope.callAPI = function(user) {
			var inputscore={
	"score":[
		[$scope.inputscore11,$scope.inputscore12],
		[$scope.inputscore21,$scope.inputscore22],
		[$scope.inputscore31,$scope.inputscore32],
		[$scope.inputscore41,$scope.inputscore42],
		[$scope.inputscore51,$scope.inputscore52],
		[$scope.inputscore61,$scope.inputscore62],
		[$scope.inputscore71,$scope.inputscore72],
		[$scope.inputscore81,$scope.inputscore82],
		[$scope.inputscore91,$scope.inputscore92],
		[$scope.inputscore101,$scope.inputscore102,$scope.inputscore103]
	]};
			console.log(JSON.stringify(inputscore));

			Restangular.setBaseUrl('http://localhost:9044/api/');
			Restangular.all('values').post(inputscore)
			.then(
				function(res){
					console.log(res);
				}
			);
		};
		
	}
]);