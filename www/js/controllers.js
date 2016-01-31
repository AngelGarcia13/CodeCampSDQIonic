angular.module('starter.controllers', [])

.controller('SpeechesCtrl', function($scope, Speakers) {
    $scope.speeches = Speakers.all();
})

.controller('SpeakersCtrl', function($scope, Speakers) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.speakers = Speakers.getSpeakers();
//   $scope.remove = function(speech) {
//     Speakers.remove(speech);
//   };
})

.controller('SpeechDetailCtrl', function($scope, $stateParams, Speakers) {
  $scope.speech = Speakers.get($stateParams.speechId);
  $scope.speaker = Speakers.getSpeaker($stateParams.speechId);
})

.controller('SponsorsCtrl', function($scope, Speakers) {
  $scope.sponsors = Speakers.getSponsors();
})
.controller('TabsCtrl', function($scope) {
  $scope.platform = ionic.Platform.platform();
});
