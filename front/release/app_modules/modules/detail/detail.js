angular.module('DetailCtrl',[]).controller('DetailCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	function($stateParams, $rootScope, $scope, $state){
		$scope.userInfo = $stateParams.rowData;
		
		if($scope.userInfo) {
			$scope.pageTitle = '詳細';
		}else{
			$scope.pageTitle = '新規登録';
		}
		
		$scope.runEntry = function(){
			$state.go('main.list');
		};
	}
]);