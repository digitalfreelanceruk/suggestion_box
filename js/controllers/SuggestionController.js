app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts.filter(function(a) {
      return (a.id == $routeParams.id);
    })[0];
	$scope.addComment = function() {
		if(!$scope.body || $scope.body === "") {
			return;
		}
		$scope.post.comments.push({
			body: $scope.body,
			upvotes: 0
		});
		$scope.body = '';
	};
	$scope.upVote = function(comment) {
		post.comments.upvotes += 1;
	};
}]);