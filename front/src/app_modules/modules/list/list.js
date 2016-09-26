angular.module('ListCtrl',[]).controller('ListCtrl',[
	'$stateParams',
	'$rootScope',
	'$scope',
	'$state',
	'$timeout',
	function($stateParams, $rootScope, $scope, $state, $timeout){
		$scope.menuToggled = true;
		
		$scope.listData = [
			{
				firstName:'Mark',
				lastName: 'Otto',
				userName: '@mdo',
				mailAddress: 'test1@test.com',
				selectedRow: false
			},
			{
				firstName:'Jacob',
				lastName: 'Thornton',
				userName: '@fat',
				mailAddress: 'test2@test.com',
				selectedRow: false
			},
			{
				firstName:'Larry',
				lastName: 'the Bird',
				userName: '@twitter',
				mailAddress: 'test3@test.com',
				selectedRow: false
			}
		];
		
		$scope.selectRow = function(row){
			row.selectedRow = true;
			$timeout(function(){$state.go('main.detail', {rowData: row});}, 300);
		};
	}
]);