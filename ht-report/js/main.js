var myApp = angular.module('app',['ui.bootstrap']);
myApp.controller('htReportCtrl', ['$scope', function($scope) {
	var currentDate = new Date();
	var prevMonth = (currentDate.getMonth() === 0) ? 11 : currentDate.getMonth() - 1;
	var prevMonthYear = (prevMonth === 11) ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
	var familyNotVisitedTemplate = { family: null, homeTeachers: null };
	var memberMaintenanceTemplate = { name: null, isMovingIn: false, info: null, address: null };
	var wardNameLocalStr = localStorage.wardName || null;
	$scope.listPlaceholder = 'Hit "Enter" after each name.';
	$scope.delayUpdate = { updateOn: 'default blur', debounce: { 'default': 1000, 'blur': 0 } };
	$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	$scope.model = {
		wardName: wardNameLocalStr
		, month: $scope.months[prevMonth]
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
		,eldersNotAttendingList: ''
		,prospectiveElderList: ''
		,quorumPresidencyVisitsList: ''
		,familiesNotVisited: [
			{ family: 'See attached list', homeTeachers: null }
		]
		,memberMaintenance: []
	};
	$scope.eldersNotAttending = [];
	$scope.prospectiveEldersProgressing = [];
	$scope.presidencyVisits = [];

	$scope.$watch('model', function (newVal, oldVal, scope) {
		var jsonString = JSON.stringify($scope.model);
		if (typeof jsonString === 'string') {
			$scope.backupData = jsonString;
		}
	}, true);

	$scope.$watch('model.eldersNotAttendingList', function (newVal, oldVal, scope) {
		$scope.eldersNotAttending = newVal.split('\n');
	});

	$scope.$watch('model.prospectiveElderList', function (newVal, oldVal, scope) {
		$scope.prospectiveEldersProgressing = newVal.split('\n');
	});

	$scope.$watch('model.quorumPresidencyVisitsList', function (newVal, oldVal, scope) {
		$scope.presidencyVisits = newVal.split('\n');
	});

	$scope.wardNameUpdate = function () {
		if ($scope.model.wardName) {
			localStorage.wardName = $scope.model.wardName;
			//console.log(localStorage);
		} else {
			localStorage.removeItem('wardName');
			//console.log(localStorage);
		}
	};

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

	$scope.restoreData = function () {
		if (typeof $scope.backupData === 'string') {
			try {
				var jsonData = JSON.parse($scope.backupData);
				if (typeof jsonData === 'object') {
					$scope.model = angular.copy(jsonData);
				}
			} catch (e) {
				alert('The data you are trying to restore is corrupt.  Make sure the data is a properly formatted JSON string.');
			}
		}
	};

	/*// test
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
	angular.extend($scope.model, testData);*/
}]);

// Templates
myApp.run(['$templateCache', function ($templateCache) {
	$templateCache.put('month', [
		'<div>',
		'	Previous month... the month you are doing the report on.',
		'</div>',
	''].join('\n'));
	$templateCache.put('elderCount', [
		'<div>',
		'	<ul>',
		'		<li>Go to <strong>LCR</strong>.</li>',
		'		<li>Click on the <strong>Organizations</strong> dropdown.</li>',
		'		<li>Click on <strong>Elders Quorum</strong>.</li>',
		'		<li>Click on the <strong>Members</strong> tab.</li>',
		'		<li>Click on the <strong>Options</strong> dropdown.</li>',
		'		<li>Under <strong>Filter By</strong>, select <strong>Elder</strong>.</li>',
		'	</ul>',
		//'	Total Number of Elders can be found by going to <strong>Organizations &gt; Elders Quorum</strong>. Scroll to the bottom of the list to find the number of Elders',
		'</div>',
	''].join('\n'));
	$templateCache.put('prospectiveElderCount', [
		'<div>',
		'	Same as getting the <strong>Total Number of Elders</strong> like you did in the previous step, except you <strong>Filter By: Prospective Elder</strong> instead.',
		//'	From Bishop???',
		'</div>',
	''].join('\n'));
	$templateCache.put('elderAttend', [
		'<div>',
		'	Count the number from the <strong>Attendance Role</strong> (Not including the Prospective Elders. Also, Don\'t forget the Elders from Primary, YM, etc...)',
		'</div>',
	''].join('\n'));
	$templateCache.put('prospectiveElderAttend', [
		'<div>',
		'	Count the number from the <strong>Attendance Role</strong>',
		'</div>',
	''].join('\n'));
	$templateCache.put('familiesAssigned', [
		'<div>',
		//'	The best way to get this number:',
		'	<ul>',
		'		<li>Go to <strong>LCR &gt; Organizations &gt; Home and Visiting Teaching</strong>.</li>',
		'		<li>Select the <strong>Overview</strong> tab.</li>',
		'		<li>Click the <strong>Totals</strong> button on the right side (as opposed to <strong>Percentages</strong>).</li>',
		'		<li>To the right of <strong>Elder Visits</strong> you will see numbers like <strong>XX/XX</strong>. Use the number on the right (XX/<strong>XX</strong>).</li>',
		'	</ul>',
		'</div>',
	''].join('\n'));
	$templateCache.put('familiesVisited', [
		'<div>',
		'	Use the same steps from <strong>Families Assigned</strong>, except in the last step, use number on the left (<strong>XX</strong>/XX).',
		'</div>',
	''].join('\n'));
	$templateCache.put('familiesNotAssigned', [
		'<div>',
		'	On the <strong>Overview</strong> tab, use the number to the right of <strong>Households Not Assigned to be Home Taught</strong>',
		'</div>',
	''].join('\n'));
	$templateCache.put('companionshipCount', [
		'<div>',
		'	Go to the <strong>Companionships</strong> tab. Just below each District it shows the number of Companionships for that District. Get this number for each District and add them up.',
		'</div>',
	''].join('\n'));
	$templateCache.put('ppiCount', [
		'<div>',
		'	Get this number from each District Leader.',
		'</div>',
	''].join('\n'));
	$templateCache.put('eldersNotAttending', [
		'<div>',
		'	Does not need to be ALL the Elders not attending Elders Quorum. Just the ones who sometimes or normally come, but have not for the month you are reporting on.',
		'</div>',
	''].join('\n'));
	$templateCache.put('prospectiveEldersProgress', [
		'<div>',
		'	The <strong>Prospective Elders</strong> the EQ presidency is focusing on.',
		'</div>',
	''].join('\n'));
	$templateCache.put('tmpl', [
		'<div>',
		'	',
		'</div>',
	''].join('\n'));
}]);