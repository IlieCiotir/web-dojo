angular.module('htmldojo', ['hmtldojo.hallOfFame']);
angular.module('htmldojo').controller('Dojo', ['$scope', 'StoriesSvc', function($scope, StoriesSvc){
	$scope.stories = StoriesSvc.stories;
}]);

angular.module('htmldojo').factory('StoriesSvc', [function(){
	var webSamurai = {
			title: "Web Samurai",
			description: {
				ps: ['Set in the mythical Realm 101 the story sets the user in the place of a child joining the local CoderDojo in the hope of one day becomming a mighty Web Samurai.',
				'The first chapter follows the pupil\'s first day in the dojo. The story quickly escalates when the dojo is attacked by an yet unkown entity.',
				'The second chapter is still under development.']
			},
			author:"Ilie",
			hallOfFame: {
				the1st: {
					name: "Muller Eduard",
					avatar: 'images/avatars/malfurion.png'
				},
				mentions: []
				
			},
			dificulty: "Medium",
			prerequisites:"CodeCademy HTML/CSS/Javascript course",
			gitHubFolder: "https://github.com/Toskv/web-dojo/tree/master/stories/WebSamurai"
		};
	var stories = [webSamurai];
	return {
		stories:stories
	}
}]);

angular.module('htmldojo').controller('Motto', ['$scope', '$timeout', function($scope, $timeout){
	var mottoList = [
		"Share your programming superpowers",
		"Teach with a story",
		"Mentor the next generation of programmers",
		"Be someone's hero",
		"#PowerfulPlay",
		"Yet another awesome motto"
	];

	var index = 0;
	$scope.motto = mottoList[index];
	var changeMotto = function() {
		index = (index + 1) % mottoList.length;
		$scope.motto = mottoList[index];
		$timeout(changeMotto, 3000);
	};
	$timeout(changeMotto, 3000);

	
}]);