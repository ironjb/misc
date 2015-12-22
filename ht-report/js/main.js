// var myApp = angular.module('app',['ui.bootstrap']);
var myApp = angular.module('app', []);
myApp.controller('htReportCtrl', ['$scope', function($scope) {
	var currentDate = new Date();
	var prevMonth = (currentDate.getMonth() === 0) ? 11 : currentDate.getMonth() - 1;
	var prevMonthYear = (prevMonth === 11) ? currentDate.getFullYear() - 1 : currentDate.getFullYear();
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
	};
}]);