var app = angular.module('noteApp', []);

app.controller('noteController', function($scope) {

  $scope.note = '';
  $scope.savedNote = '';
  $scope.charactersLeft = 0;
  $scope.isNoteSaved = false;

  $scope.save = function() {
    $scope.savedNote = $scope.note;
    $scope.isNoteSaved = true;
  };

  $scope.clear = function() {
    $scope.savedNote = '';
    $scope.note = '';
    $scope.isNoteSaved = false;
  };

  $scope.left = function() {
    return 100 - $scope.note.length;
  };

});
