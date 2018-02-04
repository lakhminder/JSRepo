var clkModule = angular.module("clockApp", []);
clkModule.controller("ClockCtlr", setDate);
function setDate($scope) {
    var currentdate = new Date();
    $scope.clkTime = currentdate.toTimeString();
    $scope.userName = "";
    $scope.updateTime = function() {
        var currentdate = new Date();
        $scope.clkTime = currentdate.toTimeString();
    }

}