var module = angular.module("multiCtlrApp", []);
module.controller("OuterCtlr1", OuterCtlr1);
module.controller("OuterCtlr2", OuterCtlr2);
module.controller("InnerCtlr1", InnerCtlr1);
module.controller("InnerCtlr2", InnerCtlr2);

function OuterCtlr1($scope) {
    $scope.someText = "From Outer Ctlr1";
}
function OuterCtlr2($scope) {
    $scope.someText = "From Outer Ctlr2";
}
function InnerCtlr1($scope) {
    $scope.someText = "From Inner Ctlr1";
}
function InnerCtlr2($scope) {
    //$scope.someText = "From Inner Ctlr";
}