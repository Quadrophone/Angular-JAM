'use strict';

/* Controllers */

    function EpisodeControl($scope, $http) {
    $http.get('episodes/JAM.json').success(function(data) {
    $scope.episodes = data;
    var episodes = {guest: guest, host:host, id:i};
        EpisodeControl.push(episodes);
    });
        
     
    $scope.guest = 'guest';

    }
    //EpisodeControl.$inject = ['$scope', '$http'];