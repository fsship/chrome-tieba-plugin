(function() {
    var popup = angular.module("TBPlugin", []);

    popup.controller('mainController', function($scope) {

        $scope.settings = {
            'removeAd' : true,
            'spamList' : []
        };

        chrome.storage.sync.get({
            settings : {
                'removeAd' : true,
                'spamList' : []
            }
        }, function(item) {
            console.log(item);
            $scope.settings = item.settings;
            $scope.$apply();
        });

        $scope.add = function() {
            var theSpam = document.getElementById("spam").value;
            for (var i = 0; i < $scope.settings.spamList.length; i++) {
                if ($scope.settings.spamList[i] == theSpam) {
                    return false;
                }
            }
            $scope.settings.spamList.push(theSpam);
        }

        $scope.remove = function(theSpam) {
            console.log("spam delete " + theSpam);
            for (var i = 0; i < $scope.settings.spamList.length; i++) {
                if ($scope.settings.spamList[i] == theSpam) {
                    $scope.settings.spamList.splice(i, 1);
                }
            }
        }

        $scope.save = function() {
            chrome.storage.sync.set({
                settings : $scope.settings
            }, function() {
                window.close();
            });
        }
    });
})()
