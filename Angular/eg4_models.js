var modalModule = angular.module("modelApp", []);
modalModule.controller("ModelCtlr", ModelCtlr);

function ModelCtlr($scope) {
    $scope.textBoxChange = function() {
        console.log("Text changed!!");
    }

}