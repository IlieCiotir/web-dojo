angular.module('htmldojo', []);
angular.module('htmldojo').controller('Dojo', ['$scope', 'StoriesSvc', function($scope, StoriesSvc){
	$scope.stories = StoriesSvc.stories;
}]);

angular.module('htmldojo').factory('StoriesSvc', [function(){
	var webSamurai = {
			title: "Web Samurai",
			description: "Say something about this",
			author:"Ilie",
			hallOfFame: {
				the1st: {
					name: "Eduard"
				},
				
			},
			dificulty: "Medium",
			prerequisites:"CodeCademy HTML/CSS/Javascript course",
			downloadLink: ""
		};
	var stories = [webSamurai];
	return {
		stories:stories
	}
}]);