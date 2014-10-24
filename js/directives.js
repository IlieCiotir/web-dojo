angular.module('hmtldojo.hallOfFame',[]);
angular.module('hmtldojo.hallOfFame').directive('honoredPerson',[function(){
	return {
		restrict: 'E',
		scope:{
			person: '@'
		},
		templateUrl: 'js/views/honoredPerson.html',
		controller:'HonoredPersonCtrl'
	};
}]);

angular.module('hmtldojo.hallOfFame').controller('HonoredPersonCtrl', ['$scope', function($scope){

}]);