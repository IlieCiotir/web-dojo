angular.module('hmtldojo.hallOfFame',[]);
angular.module('hmtldojo.hallOfFame').directive('honoredPerson',[function(){
	return {
		restrict: 'E',
		scope:{
			person: '@'
		},
		//templateUrl: 'js/views/honoredPerson.html',
		template :'<div class="honoredPerson">' 
				//	+ '<img ng-src="{{person.avatar}}"></img>'
					+ 'blablabla{{person.name}}' 
					+'</div>',
		controller:'HonoredPersonCtrl'
	};
}]);

angular.module('hmtldojo.hallOfFame').controller('HonoredPersonCtrl', ['$scope', function($scope){

}]);