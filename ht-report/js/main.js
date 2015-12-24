var myApp = angular.module('app',['ui.bootstrap']);
myApp.controller('htReportCtrl', ['$scope', function($scope) {
	var currentDate = new Date();
	var prevMonth = (currentDate.getMonth() === 0) ? 11 : currentDate.getMonth() - 1;
	var prevMonthYear = (prevMonth === 11) ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
	var familyNotVisitedTemplate = { family: null, homeTeachers: null };
	var memberMaintenanceTemplate = { name: null, isMovingIn: false, info: null, address: null };
	$scope.listPlaceholder = 'Hit "Enter" after each name.';
	$scope.delayUpdate = { updateOn: 'default blur', debounce: { 'default': 1000, 'blur': 0 } };
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.model = {
		month: $scope.months[prevMonth]
		,year: prevMonthYear
		,elderCount: null
		,elderAttend: null
		,prospectiveElderCount: null
		,prospectiveElderAttend: null
		,familiesAssigned: null
		,familiesNotAssigned: null
		,familiesVisited: null
		,companionshipCount: null
		,ppiCount: null
		,eldersNotAttendingList: null
		,prospectiveElderList: null
		,quorumPresidencyVisitsList: null
		,familiesNotVisited: [
			{ family: 'See attached list', homeTeachers: null }
		]
		,memberMaintenance: []
	};
	$scope.eldersNotAttending = [];
	$scope.prospectiveEldersProgressing = [];
	$scope.presidencyVisits = [];

	$scope.$watch('model.eldersNotAttendingList', function (newVal, oldVal, scope) {
		$scope.eldersNotAttending = newVal.split('\n');
	});

	$scope.$watch('model.prospectiveElderList', function (newVal, oldVal, scope) {
		$scope.prospectiveEldersProgressing = newVal.split('\n');
	});

	$scope.$watch('model.quorumPresidencyVisitsList', function (newVal, oldVal, scope) {
		$scope.presidencyVisits = newVal.split('\n');
	});

	$scope.addFamilyNotVisited = function () {
		$scope.model.familiesNotVisited.push(angular.copy(familyNotVisitedTemplate));
	};

	$scope.removeFamilyNotVisited = function (i) {
		var confirmRemove = confirm('Remove from list?');
		if (confirmRemove) {
			$scope.model.familiesNotVisited.splice(i,1);
		}
	};

	$scope.addMemberMaintenance = function () {
		$scope.model.memberMaintenance.push(angular.copy(memberMaintenanceTemplate));
	};

	$scope.removeMemberMaintenance = function (i) {
		var confirmRemove = confirm('Remove entry?');
		if (confirmRemove) {
			$scope.model.memberMaintenance.splice(i,1);
		}
	};

	// test
	var testData = { elderCount: 78, elderAttend: 33, prospectiveElderCount: 2, prospectiveElderAttend: 0, familiesAssigned: 93, familiesNotAssigned: 3, familiesVisited: 42, companionshipCount: 24, ppiCount: 6
		, eldersNotAttendingList: 'Mouse, Mickey\nBourne, Jason\nDoo, Scooby\nDickens, Charles\nFranklin, Ben\nBell, Alexander Graham', prospectiveElderList: 'Clause, Santa\nFrost, Jack'
		, quorumPresidencyVisitsList: 'Washington, George\nCaptain Moroni\nGandhi' };
	testData.familiesNotVisited = [
		{ family: 'See attached list', homeTeachers: null }
		,{ family: 'f1', homeTeachers: 'ht1' }
		,{ family: 'f2', homeTeachers: 'ht2' }
	];
	testData.memberMaintenance = [
		{ name: 'Family A', isMovingIn: true, info: 'Husband, Wife and 4 kids.', address: 'Sugar lane' }
		,{ name: 'Person B', isMovingIn: false, info: 'moving to North Pole', address: '1 North Pole' }
	];
	angular.extend($scope.model, testData);
}]);