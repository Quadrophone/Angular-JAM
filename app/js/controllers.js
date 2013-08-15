'use strict';

/* Controllers */

    function EpisodeControl($scope, $http) {
    $http.get('episodes/JAM.json').success(function(data) {
    $scope.episodes = data;
    });
        
     
    $scope.guest = 'guest';

    }
    //EpisodeControl.$inject = ['$scope', '$http'];